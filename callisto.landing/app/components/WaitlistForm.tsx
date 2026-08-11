"use client";

import { FormEvent, useState } from "react";

type FormStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; alreadyRegistered: boolean }
  | { kind: "error"; message: string };

const profiles = [
  ["owner", "Propriétaire"],
  ["manager", "Gestionnaire immobilier"],
  ["investor", "Investisseur"],
  ["operator", "Équipe d’exploitation"],
  ["other", "Autre"],
];

const portfolioSizes = [
  ["1-10", "1 à 10 unités"],
  ["11-50", "11 à 50 unités"],
  ["51-200", "51 à 200 unités"],
  ["201-1000", "201 à 1 000 unités"],
  ["1000+", "Plus de 1 000 unités"],
];

export default function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus({ kind: "submitting" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as {
        error?: string;
        alreadyRegistered?: boolean;
      };

      if (!response.ok) {
        throw new Error(result.error || "Impossible de finaliser votre inscription.");
      }

      form.reset();
      setStatus({
        kind: "success",
        alreadyRegistered: Boolean(result.alreadyRegistered),
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Réessayez dans un instant.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="waitlist-card waitlist-success" role="status">
        <span className="success-mark">✓</span>
        <p className="form-kicker">Transmission reçue</p>
        <h3>
          {status.alreadyRegistered
            ? "Votre place est déjà réservée."
            : "Votre place est réservée."}
        </h3>
        <p>
          Nous vous contacterons avant l’ouverture publique lorsque la prochaine
          vague d’invitations sera prête.
        </p>
        <button className="form-reset" type="button" onClick={() => setStatus({ kind: "idle" })}>
          Inscrire une autre adresse
        </button>
      </div>
    );
  }

  return (
    <form className="waitlist-card" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <p className="form-kicker">Liste d’attente privée</p>
          <h3>Réservez votre place</h3>
        </div>
        <span className="form-wave">VAGUE 01</span>
      </div>

      <div className="form-grid">
        <label>
          <span>Nom complet</span>
          <input name="fullName" type="text" autoComplete="name" maxLength={100} placeholder="Votre nom" required />
        </label>
        <label>
          <span>Email professionnel</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} placeholder="vous@entreprise.com" required />
        </label>
        <label>
          <span>Votre profil</span>
          <select name="profile" defaultValue="" required>
            <option value="" disabled>Sélectionner</option>
            {profiles.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </label>
        <label>
          <span>Pays</span>
          <input name="country" type="text" autoComplete="country-name" maxLength={80} placeholder="Canada, Sénégal…" required />
        </label>
        <label className="form-wide">
          <span>Taille du portefeuille</span>
          <select name="portfolioSize" defaultValue="" required>
            <option value="" disabled>Sélectionner le nombre d’unités</option>
            {portfolioSizes.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </label>
        <label className="honeypot" aria-hidden="true">
          <span>Site web</span>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="consent">
        <input name="consent" type="checkbox" value="accepted" required />
        <span>J’accepte de recevoir les nouvelles et invitations privées de Callisto Pilot.</span>
      </label>

      {status.kind === "error" && <p className="form-error" role="alert">{status.message}</p>}

      <button className="button button-primary form-submit" type="submit" disabled={status.kind === "submitting"}>
        {status.kind === "submitting" ? "Réservation en cours…" : "Rejoindre la liste prioritaire"}
        <span>{status.kind === "submitting" ? "···" : "↗"}</span>
      </button>
      <p className="form-note">Aucun spam. Vous pourrez vous désinscrire à tout moment.</p>
    </form>
  );
}
