/*  explain regular expression in JS
    https://chatgpt.com/share/678407bf-c7ac-8010-9910-bf5c2d6a5998

    Flags in Regular Expressions:

    Flags modify the behavior of the RegEx. Common flags are:
        g: Global search (find all matches, not just the first).
        i: Case-insensitive search.
        m: Multi-line mode.
        s: Dot (.) matches newline characters.
        u: Enables Unicode matching.
        y: "Sticky" search; matches only at the position indicated by the last index.

    Common Patterns and Syntax
        .	Matches any character except newline (unless s flag is used).
        \d	Matches any digit (0-9).
        \D	Matches any non-digit.
        \w	Matches any word character (letters, digits, underscore).
        \W	Matches any non-word character. non-word characters are any 
            characters that are not alphanumeric (a-z, A-Z, 0-9) or the underscore (_).
        \s	Matches any whitespace character (spaces, tabs, newlines).
        \S	Matches any non-whitespace character.
        \b the \b metacharacter is used to represent a word boundary. 
            A word boundary is a position between a word character (\w) and 
            a non-word character (\W), or at the start or end of a string if 
            the word character is adjacent to it.
        ^	Matches the start of a string.
        $	Matches the end of a string.
        *	Matches 0 or more of the preceding character.
        +	Matches 1 or more of the preceding character.
        ?	Matches 0 or 1 of the preceding character.
        {n}	Matches exactly n occurrences of the preceding character.
        {n,}	Matches n or more occurrences.
        {n,m}	Matches between n and m occurrences.
        
        ()	Groups patterns for capturing or applying operators.
        []	Matches any character inside the brackets (e.g., [aeiou]).
        [^]	Matches any character not in the brackets (e.g., [^aeiou]).
        \	Escapes special characters (e.g., \. matches a literal period .).
        - the dash inside square brackets [ ] is used to specify a range of characters.

    Working with RegEx Methods
        String Methods
            match(): Finds matches.
            replace(): Replaces matched text.
            search(): Finds the position of the first match.
            split(): Splits a string by matches.
        RegEx Methods
            test(): Tests if a match exists (returns true or false).
            exec(): Executes a search and returns details about the match.
*/

// 1. What regex pattern would match all strings that start with cat? Examples: cat, catapult, catch.

{
  const text = "cat, catapult, catch pcat";
  const regex = /\bcat/g;
  //   console.log(text.match(regex));
}
// 2. Write a regex that matches a US phone number in the format 123-456-7890.
{
  const text = "123-456-7890";
  const regex = /^\d{3}-\d{3}-\d{4}$/;
  //   console.log(regex.test(text));
}
// 3. How would you write a regex to match any 3-letter word (e.g., cat, dog, sun)?
{
  const text = "cat, dog sun suntan";
  const regex = /\b\w{3}\b/g;
  //   console.log(text.match(regex));
}
// 4. Which regex would match a string containing only digits?
{
  const text = "textxx123";
  const regex = /^\d+$/;
  //   console.log(regex.test(text));
}
// 5. Write a regex to match a valid email address (e.g., example@test.com).

{
  const text = "example@test.com";
  const regex = /^[\w{2,}]+@[\w{2,}]+.\w{2,3}]$/gi;
  //   console.log(regex.test(text));
}

// 6. Write a regex that matches dates in the format MM/DD/YYYY.
// Ensure the months and days stay in valid ranges (01-12 for months, 01-31 for days).
{
  const regex =
    /^(?:(0[1-9]|1[0-2])\/(0[1-9]|1\d|2[0-8])\/(19|20)\d{2}|02\/29\/(?:19|20)(?:[02468][048]|[13579][26])|(?:0[13-9]|1[0-2])\/(29|30)\/(19|20)\d{2}|(?:0[13578]|1[02])\/31\/(19|20)\d{2})$/;

  function isValidDate(date) {
    return regex.test(date);
  }

  // Test cases
  // console.log(isValidDate("02/29/2024")); // true (leap year)
  // console.log(isValidDate("02/29/2023")); // false (not a leap year)
  // console.log(isValidDate("12/31/2023")); // true
  // console.log(isValidDate("04/31/2023")); // false (April has 30 days)
  /**
   * Explanation:
   * 
    Month Validation (0[1-9]|1[0-2]): Ensures the month is between 01 and 12.

    Day Validation: 
    For months with 28 or fewer days:
      (0[1-9]|1\d|2[0-8]): Ensures the day is between 01 and 28 for most months.
    For February 29 (leap year check):
      02\/29\/(?:19|20)(?:[02468][048]|[13579][26]): Allows 02/29 only for valid leap years.
    For months with 30 days:
      (?:0[13-9]|1[0-2])\/(29|30): Allows the 29th and 30th for months that support it.
    For months with 31 days:
      (?:0[13578]|1[02])\/31: Allows the 31st for months that support it.
   
    Year Validation:
      (19|20)\d{2}: Ensures the year is between 1900 and 2099.

    In regular expressions, ?: is used to create a non-capturing group.

    Regular Groups vs. Non-Capturing Groups
    https://chatgpt.com/share/6788a145-81fc-8010-b4bd-2996c31f75b2
    Capturing Group (()):

    Captures the matched text for use later (e.g., with backreferences or retrieval in matches).
    Example: (abc) matches and captures abc.
    Non-Capturing Group ((?:)):

    Groups the pattern without capturing the matched text.
    Useful when you only need to group elements for applying operators (like |, *, +, etc.) but don’t need to save the match.
    
    */
}

// 7. Create a regex to match strings that contain the word JavaScript, case-insensitively.
{
  const regex = /\bJavaScript\b/gi;
  function check(str) {
    return str.match(regex);
  }

  // console.log(check("JavaScript word JavaScript wordJavaScriptword"));
}
// 8. Write a regex to capture words surrounded by quotation marks ("word"). Example: "hello", "world".
{
  const text = "'capture' 'words' surrounded 'by' 'quotation marks' '__'";
  const regex = /'\b\w{1,}[^_]\b'/g;
  // console.log(text.match(regex));
}

// 9. Which regex pattern would match a valid IPv4 address (e.g., 192.168.0.1)?
/**
 *General Rules
  Structure: Consists of four decimal numbers separated by dots (e.g., A.B.C.D).
  Range of Each Octet: Each of the four numbers (A, B, C, D) must be between 0 and 255, inclusive.
  No Leading Zeros: Each octet cannot have leading zeros. For example, 192.168.01.1 is invalid; it should be 192.168.1.1.
  Cannot Be Blank: Each octet must be a number, not empty. For example, 192..1.1 is invalid.
 */

// 10. Write a regex to match strings with at least one uppercase letter, one lowercase letter, one digit, and one special character.
