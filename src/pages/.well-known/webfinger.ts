// Endpoint for WebFinger
const WEBFINGER_JSON = {
  subject: "acct:dkarthi@social.lol",
  aliases: [
    "https://social.lol/@dkarthi",
    "https://social.lol/users/dkarthi",
  ],
  links: [
    {
      rel: "http://webfinger.net/rel/profile-page",
      type: "text/html",
      href: "https://social.lol/@dkarthi",
    },
    {
      rel: "self",
      type: "application/activity+json",
      href: "https://social.lol/users/dkarthi",
    },
    {
      rel: "http://ostatus.org/schema/1.0/subscribe",
      template: "https://social.lol/authorize_interaction?uri={uri}",
    },
    {
      rel: "http://webfinger.net/rel/avatar",
      type: "image/jpeg",
      href: "https://media.social.lol/accounts/avatars/113/899/934/732/874/429/original/a383849354bb113f.jpg",
    },
  ],
};

export async function GET() {
  return new Response(JSON.stringify(WEBFINGER_JSON), {
    headers: {
      "Content-Type": "application/activity+json",
    },
  });
}
