import axios from "axios";
import { MediaItems } from "src/infrastructure/services/api/MediaItems/types";

const uri = "https://run.mocky.io/"; // process env can be used

export default {
  getAll: async (): Promise<MediaItems | null> => {
    try {
      const response = await axios.get(
        `${uri}v3/a811c0e9-adae-4554-9694-173aa23bc38b`
      );
      return response.data.media.reverse();
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
