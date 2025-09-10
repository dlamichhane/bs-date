# BS Date

A JavaScript library for converting between Anno Domini (AD/Gregorian) and Bikram Sambat (BS/Nepali) dates.

## Installation

```bash
npm install bs-date
```

## Features

- Convert Bikram Sambat dates to Anno Domini dates
- Convert Anno Domini dates to Bikram Sambat dates
- Supports BS years 2000-2090 (AD 1943-2034)
- Validates date ranges and throws appropriate errors
- Extends native Date prototype with `toBS()` method
- Format dates in Nepali script with `toNepali()`
- Get month names in Nepali or romanized format
- Get day names in Nepali, romanized, or localized English format
- Convert numbers to Nepali numerals

## Usage

### Basic Usage

```javascript
import BSDate from "bs-date";
import "bs-date/src/number-utils.js"; // For Nepali number conversion

// Create a BS date
const bsDate = new BSDate(2082, 5, 25);

// Convert to AD
const adDate = bsDate.toAD();
console.log(adDate); // 2025-09-10T00:00:00.000Z

// Convert AD date to BS
const adDate2 = new Date("2025-09-10");
const bsDate2 = BSDate.fromAD(adDate2);
console.log(bsDate2); // BSDate { year: 2082, month: 5, day: 25 }

// Format in Nepali
console.log(bsDate.toNepali()); // "भाद्र २५, २०८२"

// Get month and day names
console.log(bsDate.monthName()); // "भाद्र"
console.log(bsDate.monthName({ romanized: true })); // "Bhadra"
console.log(bsDate.dayName()); // "मंगलवार"
console.log(bsDate.dayName({ romanized: true })); // "Mangalbar"
console.log(bsDate.dayName({ localized: true })); // "Tuesday"
```

### Using Date Prototype Extension

```javascript
import "bs-date/src/date-utils.js";

const adDate = new Date("2025-09-10");
const bsDate = adDate.toBS();
console.log(bsDate); // BSDate { year: 2082, month: 5, day: 25 }
```

### Using Native JavaScript Nepali Locale

For displaying dates in Nepali format using native JavaScript localization:

```javascript
const adDate = new Date("2025-09-10");

// Format AD date in Nepali locale (displays AD date in Nepali numerals)
console.log(adDate.toLocaleDateString("ne-NP")); // "२०२५/९/१०"

// For BS date formatting, combine both approaches
const bsDate = adDate.toBS();
console.log(`BS Date: ${bsDate.toNepali()}`); // "BS Date: भाद्र २५, २०८२"
console.log(`AD Date (Nepali): ${adDate.toLocaleDateString("ne-NP")}`); // "AD Date (Nepali): २०२५/९/१०"
```

**Note:** `toLocaleDateString('ne-NP')` formats the **AD date** in Nepali numerals and locale format, while `toBS()` and `toNepali()` provides the actual **BS calendar date** in Nepali script.

## API Reference

### BSDate Class

#### Constructor

```javascript
new BSDate(year, month, day);
```

- `year` (number): BS year (2000-2090)
- `month` (number): BS month (1-12)
- `day` (number): BS day (1-32, varies by month)

#### Methods

##### `toAD()`

Converts the BS date to an AD Date object.

**Returns:** `Date` - The equivalent AD date

**Throws:** `BSDateOutOfRangeError` - If the BS date is invalid or out of range

##### `toNepali()`

Formats the BS date in Nepali script.

**Returns:** `string` - The formatted date (e.g., "भाद्र २५, २०८२")

##### `monthName(options)`

Gets the month name in Nepali or romanized format.

**Parameters:**

- `options` (object, optional):
  - `romanized` (boolean): If true, returns romanized month name

**Returns:** `string` - The month name

**Examples:**

```javascript
bsDate.monthName(); // "भाद्र"
bsDate.monthName({ romanized: true }); // "Bhadra"
```

##### `dayName(options)`

Gets the day name in various formats.

**Parameters:**

- `options` (object, optional):
  - `romanized` (boolean): If true, returns romanized day name
  - `localized` (boolean): If true, returns English day name

**Returns:** `string` - The day name

**Throws:** `Error` - If both romanized and localized are true

**Examples:**

```javascript
bsDate.dayName(); // "मंगलवार"
bsDate.dayName({ romanized: true }); // "Mangalbar"
bsDate.dayName({ localized: true }); // "Tuesday"
```

##### `BSDate.fromAD(adDate)`

Static method to create a BSDate from an AD Date.

**Parameters:**

- `adDate` (Date): The AD date to convert

**Returns:** `BSDate` - The equivalent BS date

### Date Prototype Extension

#### `Date.prototype.toBS()`

Converts an AD Date to BSDate.

**Returns:** `BSDate` - The equivalent BS date

**Throws:** `DateOutOfRangeError` - If the AD date is before April 14, 1943

### Number Prototype Extension

#### `Number.prototype.toNepali()`

Converts a number to Nepali numerals.

**Returns:** `string` - The number in Nepali numerals

**Examples:**

```javascript
import "bs-date/src/number-utils.js";

(123).toNepali(); // "१२३"
(2082).toNepali(); // "२०८२"
```

## Supported Date Range

- **BS Range:** 2000/01/01 - 2090/12/30
- **AD Range:** April 14, 1943 - April 13, 2034

## Error Handling

The library throws two types of errors:

### BSDateOutOfRangeError

Thrown when:

- BS year is outside the supported range (2000-2090)
- BS month is invalid (not 1-12)
- BS day is invalid for the given month/year
- Required constructor parameters are missing

### DateOutOfRangeError

Thrown when:

- AD date is before the supported epoch (April 14, 1943)

## Examples

### Error Handling

```javascript
import BSDate, { BSDateOutOfRangeError } from "bs-date";

try {
  const invalidDate = new BSDate(1999, 1, 1);
  invalidDate.toAD();
} catch (error) {
  if (error instanceof BSDateOutOfRangeError) {
    console.log("BS date is out of range");
  }
}
```

### Working with Current Date

```javascript
import BSDate from "bs-date";
import "bs-date/src/date-utils.js";
import "bs-date/src/number-utils.js";

const today = new Date();
const todayBS = today.toBS();
console.log(`Today in BS: ${todayBS.year}/${todayBS.month}/${todayBS.day}`);
console.log(`Today in Nepali: ${todayBS.toNepali()}`);
console.log(`Today is ${todayBS.dayName({ localized: true })}`);
```

### Advanced Usage

```javascript
import BSDate from "bs-date";
import "bs-date/src/number-utils.js";

const bsDate = new BSDate(2082, 5, 18);

// Different formatting options
console.log("Default format:", bsDate.toNepali()); // "भाद्र १८, २०८२"
console.log("Month (Nepali):", bsDate.monthName()); // "भाद्र"
console.log("Month (English):", bsDate.monthName({ romanized: true })); // "Bhadra"
console.log("Day (Nepali):", bsDate.dayName()); // "बुधबार"
console.log("Day (English romanized):", bsDate.dayName({ romanized: true })); // "Budhbar"
console.log("Day (Localized):", bsDate.dayName({ localized: true })); // "Wednesday"

// Number conversion
console.log("Year in Nepali:", bsDate.year.toNepali()); // "२०८२"
console.log("Day in Nepali:", bsDate.day.toNepali()); // "१८"
```

## BS Calendar Information

The library includes comprehensive data for Bikram Sambat calendar:

- **Months:** Baisakh, Jeth, Asar, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra
- **Variable month lengths** depending on the year
- **Accurate conversion** based on established BS calendar data

## Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Development Mode

```bash
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Deepak Lamichhane <lamichhanedeepak@gmail.com>
