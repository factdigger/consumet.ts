import { AnimeParser, ISearch, IAnimeInfo, IAnimeResult, ISource } from '../../models';
declare class AnimePahe extends AnimeParser {
    readonly name = "AnimePahe";
    protected baseUrl: string;
    protected logo: string;
    protected classPath: string;
    /**
     * @param query Search query
     */
    search: (query: string) => Promise<ISearch<IAnimeResult>>;
    /**
     * @param id Anime id
     * @param episodePage Episode page number (optional) default: -1 to get all episodes. number of episode pages can be found in the anime info object
     */
    fetchAnimeInfo: (id: string, episodePage?: number) => Promise<IAnimeInfo>;
    /**
     *
     * @param episodeId Episode id
     */
    fetchEpisodeSources: (episodeId: string) => Promise<ISource>;
    private fetchEpisodes;
    /**
     * @deprecated
     * @attention AnimePahe doesn't support this method
     */
    fetchEpisodeServers: (episodeLink: string) => Promise<unknown>;
}
export default AnimePahe;
