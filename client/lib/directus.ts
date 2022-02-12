import { Directus } from "@directus/sdk";

import { DirectusCollections } from "../generated/directus";
import HOST from "../constants/host";

const directus = new Directus<DirectusCollections>(HOST);

export default directus;
