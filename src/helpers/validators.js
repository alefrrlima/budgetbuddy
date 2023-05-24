export function isEmail(email) {
   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
}