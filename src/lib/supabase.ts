import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://exzbyazavbctgfdywsnw.supabase.co';
const supabaseKey = 'sb_publishable_gkFIX77sr_VCOMtwmt3L5g_4NxsBlr-';

export const supabase = createClient(supabaseUrl, supabaseKey);
