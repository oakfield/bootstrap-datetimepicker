// Partial type definition for smalot-bootstrap-datetimepicker.js
// Author: Michael Smith

/// <reference path="../jquery/jquery.d.ts" />

declare namespace DateTimePicker {
	interface IConfig {
		/**
		* Whether or not to close the datetimepicker immediately when a date is selected.
		*
		* Default: false
		*/
		autoclose?: boolean;

		/**
		* You can override the auto-detect functionality of the different bootstrap versions (e.g., 2 or 3) by using this option.
		*/
		bootcssVer?: number;

		/**
		* If true, displays a "Clear" button at the bottom of the datetimepicker to clear the current selection. Moreover, the datetimepicker will be closed if autoclose is set to true.
		*
		* Default: false
		*/
		clearBtn?: boolean;

		/**
		* Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated. Example: disable weekends: '0,6' or [0,6].
		*
		* Default: "", []
		*/
		daysOfWeekDisabled?: string | number[];

		/**
		* The earliest date that may be selected; all earlier dates will be disabled.
		*
		* Default: End of time
		*/
		endDate?: Date;

		/**
		* If true, Font Awesome will be used.
		*
		* Default: false
		*/
		fontAwesome?: boolean;

		/**
		* Whether or not to force parsing of the input value when the picker is closed. That is, when an invalid date is left in the input field by the user, the picker will forcibly parse that value, and set the input's value to the new, valid date, conforming to the given format.
		*
		* Default: true
		*/
		forceParse?: boolean;

		/**
		* The date format, combination of p, P, h, hh, i, ii, s, ss, d, dd, m, mm, M, MM, yy, yyyy.
		*
		* Default: "mm/dd/yyyy"
		*/
		format?: string;

		/**
		* You can initialize the viewer with a date. By default it's now, so you can specify yesterday or today at midnight ...
		*
		* Default: new Date()
		*/
		initialDate?: Date | string;

		/**
		* Whether or not to allow date navigation by arrow keys.
		*
		* Default: true
		*/
		keyboardNavigation?: boolean;

		/**
		* The two-letter code of the language to use for month and day names. These will also be used as the input's value (and subsequently sent to the server in the case of form submissions). Currently ships with English ('en'), German ('de'), Brazilian ('br'), and Spanish ('es') translations, but others can be added (see I18N below). If an unknown language code is given, English will be used.
		*
		* Default: "en"
		*/
		language?: string;

		/**
		* The highest view that the datetimepicker should show.
		*
		* Default: 4, "decade"
		*/
		maxView?: number | string;

		/**
		* The lowest view that the datetimepicker should show.
		*
		* Default: 0, "hour"
		*/
		minView?: number | string;

		/**
		* The increment used to build the hour view. A button is created for each minuteStep minutes.
		*
		* Default: 5
		*/
		minuteStep?: number;
		onRenderDay?: (Date) => string[];
		onRenderHour?: (Date) => string[];
		onRenderMinute?: (Date) => string[];
		onRenderMonth?: (Date) => string[];

		/**
		* This option allows to place the picker just under the input field for the component implementation instead of the default position which is at the bottom right of the button.
		*
		* Default: "bottom-right"
		*/
		pickerPostion?: PickerPosition;
		showMeridian?: boolean;

		/**
		* The earliest date that may be selected; all earlier dates will be disabled.
		*
		* Default: Beginning of time
		*/
		startDate?: Date;

		/**
		* The view that the datetimepicker should show when it is opened.
		*
		* Default: 2, "month"
		*/
		startView?: number | string;

		/**
		* You can allow the viewer to display the date along with the given timezone. Note that this has to be used in conjunction with the Z format option.
		*
		* Default: Client's current timezone abbreviated name
		*/
		timezone?: string;

		/**
		* If true or "linked", displays a "Today" button at the bottom of the datetimepicker to select the current date. If true, the "Today" button will only move the current date into view; if "linked", the current date will also be selected.
		*
		* Default: false
		*/
		todayBtn?: boolean | "linked";

		/**
		* If true, highlights the current date.
		*
		* Default: false
		*/
		todayHighlight?: boolean;

		/**
		* With this option you can select the view from which the date will be selected. By default it's the last one, however you can choose the first one, so at each click the date will be updated.
		*
		* Default: 0, "hour"
		*/
		viewSelect?: number | string;

		/**
		* Day of the week start. 0 (Sunday) to 6 (Saturday)
		*
		* Default: 0
		*/
		weekStart?: number;

		/**
		* zIndex value is being automatically calculated based on the DOM tree, where we seek the highest value. To skip this process you can set the value manually.
		*
		* Default: undefined
		*/
		zIndex?: number;
	}

	type ClearDate = (funcName: "setStartDate" | "setEndDate") => void;
	type Constructor = (config: IConfig) => JQuery;
	type PickerPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
	type SetDate = (funcName: "setStartDate" | "setEndDate" | "setInitialDate", parameter: string) => void;
	type SetTime = (funcName: "setDaysOfWeekDisabled" | "setHoursDisabled" | "setMinutesDisabled",
		parameter: string | number[]) => void;
}

interface JQuery {
	datetimepicker(): JQuery;
	datetimepicker(config: DateTimePicker.IConfig): JQuery;
	datetimepicker(funcName: "setStartDate" | "setEndDate"): void;
	datetimepicker(funcName: "setStartDate" | "setEndDate" | "setInitialDate", parameter: string): void;
	datetimepicker(funcName: "setDaysOfWeekDisabled" | "setHoursDisabled" | "setMinutesDisabled", parameter: string | number[]): void;
	datetimepicker(funcName: string, parameter: Date): void;
}

interface JQueryEventObject {
	date: Date;
}

interface HTMLElement {
	datetimepicker: any;
}