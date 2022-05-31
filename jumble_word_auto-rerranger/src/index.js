import wordlist from "wordlist-english";
import wordMatcher from "./wordMatcher.js";

let englishWords = wordlist["english"];

const rearrangeMyWord = wordMatcher("dgo", englishWords);

console.log(rearrangeMyWord);
