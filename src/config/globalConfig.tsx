export const limit = 3; 

export const radius = 50;

export const defaultQuery = "";

export const baseApiUrl = "https://liveapi-sandbox.yext.com/v2/accounts/me";

export const liveAPIKey = "a8361137920aa6f01ee71dac11ab8954";

export const savedFilterId = "";

export const entityTypes = "location";

export const googleMapsConfig =  {
    centerLatitude:	51.5095146286,
    centerLongitude:-0.1244828354,
    googleMapsApiKey: "AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"   
};

export const AnswerExperienceConfig =  {
    experienceKey: "resturant",
    locale:"en",
    apiKey: "bba46f4837dcf7a98a1c03d8d2c85c05",
    verticalKey: "locations",
    experienceVersion: "STAGING",
    sessionTrackingEnabled: true,
    endpoints:{
        universalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query",
        verticalSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
        questionSubmission: "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
        universalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
        verticalAutocomplete: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
        filterSearch: "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch"
    }
};



