import { DateTime } from './datetime';

export interface IOptions {
  element?: any;
  elementEnd?: any;
  endDate?: any;
  firstDay?: number;
  format?: string;
  lang?: string;
  numberOfColumns?: number;
  numberOfMonths?: number;
  parentEl?: any;
  startDate?: any;
  zIndex?: number;
  inlineMode?: boolean;
  maxDate?: DateTime;
  maxDays?: number;
  minDate?: DateTime;
  minDays?: number;
  selectBackward?: boolean;
  selectForward?: boolean;
  singleMode?: boolean;
  splitView?: boolean;
  allowRepick?: boolean;
  autoApply?: boolean;
  disableWeekends?: boolean;
  hotelMode?: boolean;
  mobileFriendly?: boolean;
  scrollToDate?: boolean;
  showTooltip?: boolean;
  showWeekNumbers?: boolean;
  useResetBtn?: boolean;
  disallowLockDaysInRange?: boolean;
  lockDays?: any[];
  lockDaysFormat?: string;
  lockDaysInclusivity?: string;
  anyBookedDaysAsCheckout?: boolean;
  bookedDays?: any[];
  bookedDaysFormat?: string;
  bookedDaysInclusivity?: string;
  disallowBookedDaysInRange?: boolean;
  dropdowns?: { maxYear: null; minYear: number; months: boolean; years: boolean };
  buttonText?: {
    cancel: string;
    nextMonth: string;
    apply: string;
    previousMonth: string;
    reset: string
  };
  tooltipText?: { other: string; one: string };
  onChangeMonth?: () => {};
  onChangeYear?: () => {};
  onError?: () => {};
  onHide?: () => {};
  onRender?: () => {};
  onSelect?: () => {};
  onShow?: () => {};
  footerHTML?: string;
  resetBtnCallback?: () => {};
}
