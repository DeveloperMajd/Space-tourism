import React from "react";

export const DesignSystem = () => {
  return (
    <main className="design-system">
      <header>
        <div className="logo">
          <img src="/assets/shared/logo.svg" alt="logo" />
        </div>
        <p>desgin system</p>
      </header>

      {/* colors */}
      <section>
        <div className="numbered-title">
          <span>01</span>
          <p>colors</p>
        </div>
        <div className="color-boxs">
          <div className="color-box-1">
            <div className="box">#0B0D17</div>
            <div className="details">
              <div className="line-1">
                <span>RGB</span>
                <span>11, 13, 23</span>
              </div>
              <div className="line-2">
                <span>HSL</span>
                <span>230°, 35%, 7%</span>
              </div>
            </div>
          </div>
          <div className="color-box-2">
            <div className="box">#D0D6F9</div>
            <div className="details">
              <div className="line-1">
                <span>RGB</span>
                <span>208, 214, 249</span>
              </div>
              <div className="line-2">
                <span>HSL</span>
                <span>231°, 77%, 90%</span>
              </div>
            </div>
          </div>
          <div className="color-box-3">
            <div className="box">#FFFFFF</div>
            <div className="details">
              <div className="line-1">
                <span>RGB</span>
                <span>208, 214, 249</span>
              </div>
              <div className="line-2">
                <span>HSL</span>
                <span>231°, 77%, 90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* typography */}
      <section className="typography">
        <div className="numbered-title">
          <span>02</span>
          <p>typography</p>
        </div>
        <div className="columns">
          <div className="column">
            <div className="heading-1">
              <i>Heading 1 - Bellefair Regular - 150px</i>
              <div className="h1">earth</div>
            </div>
            <div className="heading-2">
              <i>Heading 2 - Bellefair Regular - 100px</i>
              <div className="h2">venus</div>
            </div>
            <div className="heading-3">
              <i>Heading 3 - Bellefair Regular - 56px</i>
              <div className="h3">JUPITER & SATURN</div>
            </div>
            <div className="heading-4">
              <i>Heading 4 - Bellefair Regular - 32px</i>
              <div className="h4">URANUS, NEPTUNE, & PLUTO</div>
            </div>
            <div className="heading-5">
              <i>
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </i>
              <div className="h5">SO, YOU WANT TO TRAVEL TO SPACE</div>
            </div>
          </div>
          <div className="column">
            <div className="heading-s1">
              <i>Subheading 1 - Bellefair Regular - 28px</i>
              <div className="subHeading-1">384,400 km</div>
            </div>
            <div className="heading-s2">
              <i>
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </i>
              <div className="subHeading-2">AVG. 12</div>
            </div>
            <div className="heading-">
              <i>
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </i>
              <div className="navText">europa</div>
            </div>
            <div className="heading-">
              <i className="light-text">Body Text</i>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* interactive elements */}
      <section className="interactive-elements">
        <div className="numbered-title">
          <span>03</span>
          <p>INTERACTIVE ELEMENTS</p>
        </div>
        <div className="columns">
          <div className="column is-centered">
            <ul className="nav-items">
              <li className="nav-item active">
                <div className="is-flex">
                  <span>00</span>
                  <p>Active</p>
                </div>
                <div className="underline" />
              </li>
              <li className="nav-item hovered">
                <div className="is-flex">
                  <span>01</span>
                  <p>Hovered</p>
                </div>
              </li>
              <li className="nav-item idle">
                <div className="is-flex">
                  <span>02</span>
                  <p>idle</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="column is-centered">
            <i>Different States of Navigation Bar</i>
          </div>
        </div>
        <div className="columns is-flex">
          <div className="column is-6">
            <div className="circle">Explore</div>
          </div>
          <div className="column is-6">test</div>
        </div>
      </section>
    </main>
  );
};
