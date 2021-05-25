import React from 'react';

// Tu też lepiej będzie po prostu użyć taga `p`, tam gdzie go potrzebujesz, zamiast tworzyć nowy komponent
// Zauważ, że jeśli użyjesz `p` bezpośrednio, to będziesz miał większą elastyczność (będziesz miał dostępne
// wszystkie props-y wbudowane w domyślny JSX dla paragrafu, np. `onClick` itp)
const Paragraf = ({ className, text }) => {
  // Text jest niepotrzebny - użyj props-a "children" i używaj paragrafu tak, jak innych tag-ów z "dziećmi" w środku
  return <p className={className}>{text}</p>;
};
export default Paragraf;
