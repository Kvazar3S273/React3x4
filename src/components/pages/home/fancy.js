import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Fancybox = (props) => {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return (
  <>
  
  {/* <Fancybox options={{ infinite: false }}>
  <p>
    <button
      data-fancybox="gallery"
      data-src="https://lipsum.app/id/1/800x600"
      className="button button-secondary"
    >
      Image #1
    </button>

    <button
      data-fancybox="gallery"
      data-src="https://lipsum.app/id/2/800x600"
      className="button button-secondary"
    >
      Image #2
    </button>
  </p>
</Fancybox> */}
  
  
  </>
  );
}

export default Fancybox;


