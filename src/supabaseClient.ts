import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabaseClient.types";

export const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

export const getMomentsWithDestinations = () =>
  supabase.from("moment").select("*,destination(*)").order("date");

export type MomentsWithDestinations = NonNullable<
  Awaited<ReturnType<typeof getMomentsWithDestinations>>["data"]
>;

export const putMoment = (
  moment: Database["public"]["Tables"]["moment"]["Insert"]
) => supabase.from("moment").upsert(moment);
