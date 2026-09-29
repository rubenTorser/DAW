// Redirige console.log/info/warn/error a la consola real Y a un panel en pantalla (#output),
// para que se vea el resultado sin tener que abrir las herramientas de desarrollador.
(function () {
  function render() {
    var out = document.getElementById("output");
    if (!out) return;
    var original = { log: console.log, info: console.info, warn: console.warn, error: console.error };
    function push(cls, args) {
      var line = document.createElement("div");
      if (cls) line.className = cls;
      line.textContent = args.map(function (a) {
        if (typeof a === "object" && a !== null) {
          try { return JSON.stringify(a); } catch (e) { return String(a); }
        }
        return String(a);
      }).join(" ");
      out.appendChild(line);
    }
    console.log = function () { original.log.apply(console, arguments); push(null, Array.prototype.slice.call(arguments)); };
    console.info = console.log;
    console.warn = function () { original.warn.apply(console, arguments); push("err", Array.prototype.slice.call(arguments)); };
    console.error = function () { original.error.apply(console, arguments); push("err", Array.prototype.slice.call(arguments)); };
    window.addEventListener("error", function (e) {
      push("err", ["✗ " + e.message]);
    });
  }
  render();
})();
