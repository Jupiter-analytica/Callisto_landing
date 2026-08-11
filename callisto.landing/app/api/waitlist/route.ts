const allowedProfiles = new Set(["owner", "manager", "investor", "operator", "other"]);
const allowedPortfolioSizes = new Set(["1-10", "11-50", "51-200", "201-1000", "1000+"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Format de requête invalide." }, { status: 415 });
  }

  const payload = (await request.json()) as Record<string, unknown>;
  if (clean(payload.website, 200)) {
    return Response.json({ ok: true }, { status: 201 });
  }

  const email = clean(payload.email, 254).toLowerCase();
  const fullName = clean(payload.fullName, 100);
  const profile = clean(payload.profile, 30);
  const country = clean(payload.country, 80);
  const portfolioSize = clean(payload.portfolioSize, 20);

  if (!fullName || !emailPattern.test(email) || !country) {
    return Response.json({ error: "Vérifiez votre nom, votre pays et votre adresse email." }, { status: 400 });
  }
  if (!allowedProfiles.has(profile) || !allowedPortfolioSizes.has(portfolioSize)) {
    return Response.json({ error: "Sélectionnez un profil et une taille de portefeuille valides." }, { status: 400 });
  }
  if (payload.consent !== "accepted") {
    return Response.json({ error: "Votre consentement est requis pour rejoindre la liste." }, { status: 400 });
  }

  console.error("waitlist_storage_not_configured");
  return Response.json(
    { error: "La liste d’attente sera ouverte prochainement." },
    { status: 503 }
  );
}
