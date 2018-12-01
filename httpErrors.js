class httpError extends Error{
    constructor(response){
        super(`${response.statusText} : for ${response.url}`);
        this.name = 'HTTPError';
        this.response = response;
    }
}