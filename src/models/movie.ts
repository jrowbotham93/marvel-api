import { Schema, model } from "mongoose";

interface ICastMember {
  name: string;
  character: string;
}
interface IMovie {
  name: string;
  releaseDate: string;
  director: string;
  cast: ICastMember[];
}

const MovieSchema = new Schema<IMovie>({
  name: { type: String, required: true },
  releaseDate: { type: String, required: true },
  director: { type: String, required: true },
  cast: [
    {
      name: String,
      character: String,
    },
  ],
});

const Movie = model<IMovie>("Movie", MovieSchema);

export { Movie };
