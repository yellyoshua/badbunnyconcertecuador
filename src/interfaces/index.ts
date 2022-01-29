export interface ConcertEvent {
  id: string;
  name: string;
  name_line_2?: string;
  url: string;
  hashtag: string;
  image: {
    thumbnail_url: string;
    default_url: string;
  };
  banner_url: string | null;
  description: string;
  description_link: string;
  timezone_name: 'America/Guayaquil';
  start_at: string; // Date typo
  end_at: string; // Date typo
  rsvp_by: string; // Date typo
  heading_text_color: string;
  banner_text_color: string;
  topics: string[];
  updated_at: string; // Date typo
  created_at: string; // Date typo
  fees_waived: boolean;
  ticketed: boolean;
  squadup_fee_dollar: string; // Number (decimal) typo
  squadup_fee_percent: string; // Number (decimal) typo
  processing_fee_dollar: string; // Number (decimal) typo
  processing_fee_percent: string; // Number (decimal) typo
  squadup_fee_cap: string; // Number (decimal) typo
  added_fee_dollar: string; // Number (decimal) typo
  added_fee_percent: string; // Number (decimal) typo
  shipping_fee: string; // Number (decimal) typo
  tax_rate: string; // Number (decimal) typo
  ticket_button_verbage: string;
  confirmation_redirect_url: string | null;
  accept_donations: boolean;
  social_discount_facebook: string | null;
  social_discount_twitter: string | null;
  require_individual_signup: boolean;
  collect_attendee_info_by: 'attendee';
  box_office_fee_percent: string; // Number (decimal) typo
  box_office_fee_dollar: string; // Number (decimal) typo
  box_office_processing_fee_percent: string; // Number (decimal) typo
  box_office_processing_fee_dollar: string; // Number (decimal) typo
  is_race: boolean;
  privacy: 'private' | 'public';
  show_start_date: boolean;
  show_end_date: boolean;
  show_timezone: boolean;
  donation_charity_name: string | null;
  donation_charity_url: string | null;
  background_url: string | null;
  facebook_tracking_id: string;
  seats_io_event_key: string | null;
  has_reserved_seating: boolean;
  max_capacity: string | null;
  host_pays_tax_processing: boolean;
  allowed_zip_codes: string[];
  timezone_abbreviation: 'UTC-05';
  location_type: 'In-Person';
  promo_codes_available: boolean;
  locale: 'en-US';
  currency_code: 'USD';
  has_custom_gateway: boolean;
  gateway_name: string;
  transfers_disabled: boolean;
  host: Host;
  location: ConcertLocation;
  category: {
    id: string | null;
    name: string;
    subcategory: boolean;
  };
  price_tiers: PriceTier[];
}
export interface PriceTier {
  id: string | null;
  price: string; // Number (decimal) typo
  name: string;
  quantity: number;
  quantity_sold: number;
  fees_paid_by: 'guest';
  min_quantity: number;
  max_quantity: number;
  qty_limit: number;
  min_order_qty: number;
  sort: number;
  priority: number;
  remaining_quantity: number;
  description: string | null;
  sales_start_date: string | null; // Date typo
  sales_end_date: string | null; // Date typo
  preceding_price_tier_id: string | null;
  willcall: boolean;
  eticket: boolean;
  shipped: boolean;
  added_fee_dollar: string; // Number (decimal) typo
  added_fee_percent: string; // Number (decimal) typo
  coming_soon: boolean;
  hidden: boolean; // if is true sell
  unhide_promo_code_id: string | null;
  package: boolean;
  package_quantity: number | null;
  default_delivery_method: 'eticket';
  event_id: string | null;
  allowed_bins: [];
  sold_out: boolean;
  hide_on_sold_out: boolean;
  seats_io_category_key: string | null;
  unhide_on_gift_card: boolean;
  is_face_value: boolean;
  add_on: boolean;
  ticketless: boolean;
  unlock_price_tier_ids: [];
}

export interface Host {
  id: string | null;
  first_name: string;
  last_name: string;
  name: string;
}

export interface ConcertLocation {
  id: string | null;
  name: string;
  latitude: string; // Number (decimal) typo
  longitude: string; // Number (decimal) typo
  address_line_1: string;
  address_line_2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  timezone_name: 'America/Guayaquil';
}

export interface ConcertInfoReponse {
  events: ConcertEvent;
  meta: {
    messages: [];
  };
}

export interface TicketSellStatus {
  isPreSale: boolean;
  isOnSaleNow: boolean;
  isOnSaleSoon: boolean;
}

export interface SicketSellStatusResponse extends TicketSellStatus {}

export interface GlobalStore {
  ticketSellStatus: TicketSellStatus;
  eventName: string | null;
  loading: boolean;
  concertLocation: ConcertLocation | null;
  concertHost: Host | null;
  backdrop: string | null;
  priceTiers: PriceTier[];
  timezone: 'America/Guayaquil';
  startAt: string | null;
  endAt: string | null;
}
