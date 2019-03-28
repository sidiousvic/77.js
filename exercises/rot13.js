function rot13(str) {
  return str.replace(/[A-Z]/g, x =>
    String.fromCharCode((x.charCodeAt(0) % 26) + 65)
  );
}
console.log(rot13("A BIG-LEGGED WOMAN AINT GOT NO SOUL"));
console.log(rot13("N OVT-YRTTRQ JBZNA NVAG TBG AB FBHY"));
