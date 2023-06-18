Text.match(regex); // return array or null
regex.test(text); // return true or false

/regex/gim;
/(reg|ex|bo)/gi;
/[1-9]/g;
/[^1-9]/g;
/[a-z]/g;
/[^a-z]/g;
/[A-Z]/g;
/[^A-Z]/g;
/[^abc]/gi;
/[acgf]/;
/[a-zA-z]/gi;
/[^a-zA-Z4^76]/gim;

/./gi; // all char
/\w/; // word only
/\W/; // not word only
/\d/; // number only
/\D/; // not nomber only
/\s/; // spase inly
/\S/; // not spase only

/\b/; // start or end regex
/\B/; // not start or not end regex

/\w+/; // one or more
/\w*/; // zero or more
/\w?/; // zero or one

/\w{3}/; // three \w
/\w{3,7}/; // three to siven
/\w{3,}/; // three or more

/\w$/; // string end \w
/^\w/; // string start \w
/\w(?=\d)/; // start \w end \d on midil more
/\w(?!\d)/; // start \w not end \d on midil more
