export interface Conference {
    name: string;
    url: string;
    startDate: string;
    endDate: string;
    city: string;
    country: string;
    online: boolean;
    locales: string[];
    offersSignLanguageOrCC: boolean;
    cocUrl: string;
    cfpUrl: string;
    cfpEndDate: string;
    bluesky: string;
    github: string;
    mastodon: string;
    twitter: string;
}
