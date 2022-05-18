import { Movie } from "../models/movie";

export default {
  Query: {
    findMovie: async (_: any, { name }: { name: string }) => {
      try {
        // Fuzzy search based on regex input
        return Movie.aggregate([
          {
            $match: {
              name: {
                $regex: name,
              },
            },
          },
        ]);
      } catch (error) {
        return error;
      }
    },
    getMovies: async (
      _: any,
      { limit, offset }: { limit: number; offset: number }
    ) => {
      try {
        // Paginated reguests with supplied limit and offset
        return Movie.find({}).limit(limit).skip(offset);
      } catch (error) {
        return error;
      }
    },
  },
};
