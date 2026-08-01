import styles from "./Specifications.module.css";

const details = [
  ["Bedrooms", "4"],
  ["Bathrooms", "3 (2 en-suite)"],
  ["Internal Area", "2,300 sq ft"],
  ["Ownership", "Freehold"],
  ["Kitchen", "Bespoke, marble worktops"],
  ["Living Spaces", "3 reception rooms"],
  ["Garden", "Walled, south-facing"],
  ["Availability", "Immediate"],
  ["Guide Price", "From £925,000"],
] as const;

function GroundFloor() {
  return (
    <svg
      className={styles.plan}
      viewBox="0 0 150 430"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.planLines}>
        <path d="M26 43V402H132V43H99V34H58V43Z" />
        <path d="M58 43V37C58 25 68 22 75 34C82 22 92 25 92 37V43" />
        <path d="M32 50H126V172H32ZM32 172H126V242H32ZM32 242H126V395H32Z" />
        <path d="M32 158H72V172M72 172V201M72 201H126" />
        <path d="M32 185H62V204H32M91 201V242" />
        <path d="M36 79H48V149H36ZM78 85H94V139H78Z" />
        <path d="M102 82V143M98 88H106M98 99H106M98 110H106M98 121H106M98 132H106" />
        <path d="M102 272H126M103 278H126" />
        <path d="M31 213H55V242M34 217H52M34 222H52M34 227H52M34 232H52M34 237H52" />
        <path d="M108 204V228H126M114 211V226" />
        <path d="M27 378H18V414H132V395M18 414H132" />
        <path d="M18 398H11V430M132 398H139V430M11 422H139" />
        <path d="M43 409a8 8 0 1 0 16 0a8 8 0 1 0-16 0M106 409a8 8 0 1 0 16 0a8 8 0 1 0-16 0" />
        <path d="M45 409l12-4M47 404l8 11M108 409l12-4M110 404l8 11" />
        <path d="M32 367a18 18 0 0 1 18 18M72 172a17 17 0 0 1 17 17M91 201a16 16 0 0 1 16 16M62 185a14 14 0 0 1 14 14M55 242a16 16 0 0 1 16 16" />
        <path d="M40 50v-6h18M99 44h20v6M48 395v-6h22M89 389h25v6" />
        <rect x="35" y="95" width="8" height="15" />
        <circle cx="116" cy="219" r="7" />
      </g>
      <g className={styles.planText}>
        <text x="75" y="12" textAnchor="middle">GARDEN</text>
        <text x="75" y="69" textAnchor="middle">KITCHEN /</text>
        <text x="75" y="78" textAnchor="middle">DINING ROOM</text>
        <text x="75" y="88" textAnchor="middle">5.20 x 4.40m</text>
        <text x="48" y="180" textAnchor="middle">PANTRY</text>
        <text x="113" y="213" textAnchor="middle">WC</text>
        <text x="81" y="313" textAnchor="middle">DRAWING ROOM</text>
        <text x="81" y="324" textAnchor="middle">4.20 x 4.60m</text>
      </g>
    </svg>
  );
}

function FirstFloor() {
  return (
    <svg
      className={styles.plan}
      viewBox="0 0 150 430"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.planLines}>
        <path d="M25 56V400H132V56Z" />
        <path d="M32 63H125V178H32ZM32 178H125V274H32ZM32 274H125V393H32Z" />
        <path d="M32 178H75M75 178V211H125M75 211V274" />
        <path d="M80 211V238H125M80 238H125" />
        <path d="M32 207H52V272H32M35 212H49M35 219H49M35 226H49M35 233H49M35 240H49M35 247H49M35 254H49M35 261H49" />
        <path d="M96 215h22v18H96ZM96 243h22v19H96" />
        <path d="M101 220a6 6 0 1 0 12 0M102 249a6 6 0 1 0 12 0" />
        <path d="M32 158a18 18 0 0 1 18 18M75 190a18 18 0 0 1 18 18M75 254a18 18 0 0 1 18 18M52 249a17 17 0 0 1 17 17" />
        <path d="M38 63v-6h20M72 57h22v6M107 57h14v6M38 393v-6h23M77 387h20M108 387h13v6" />
        <path d="M125 92h7v30h-7M125 320h7v34h-7" />
      </g>
      <g className={styles.planText}>
        <text x="79" y="109" textAnchor="middle">BEDROOM 1</text>
        <text x="79" y="121" textAnchor="middle">4.20 x 4.40m</text>
        <text x="103" y="195" textAnchor="middle">EN SUITE</text>
        <text x="103" y="229" textAnchor="middle">DRESSING</text>
        <text x="103" y="257" textAnchor="middle">BATHROOM</text>
        <text x="79" y="329" textAnchor="middle">SITTING ROOM</text>
        <text x="79" y="341" textAnchor="middle">4.20 x 4.60m</text>
      </g>
    </svg>
  );
}

function SecondFloor() {
  return (
    <svg
      className={styles.plan}
      viewBox="0 0 150 430"
      aria-hidden="true"
      focusable="false"
    >
      <g className={styles.planLines}>
        <path d="M25 56V400H132V56Z" />
        <path d="M32 63H125V159H32ZM32 159H125V240H32ZM32 240H125V319H32ZM32 319H125V393H32Z" />
        <path d="M32 159H75V204H125M75 159V204M75 204V240" />
        <path d="M76 204H104V237M104 204H125" />
        <path d="M32 181H52V257H32M35 186H49M35 193H49M35 200H49M35 207H49M35 214H49M35 221H49M35 228H49M35 235H49M35 242H49M35 249H49" />
        <path d="M108 171h17v24M111 181a6 6 0 1 0 11 0M108 212h17" />
        <path d="M32 140a18 18 0 0 1 18 18M75 181a18 18 0 0 1 18 18M104 219a17 17 0 0 1 17 17M32 278a18 18 0 0 1 18-18M32 344a18 18 0 0 1 18-18" />
        <path d="M38 63v-6h20M72 57h22v6M107 57h14v6M38 393v-6h23M77 387h20M108 387h13v6" />
        <path d="M125 91h7v30h-7M125 276h7v30h-7M125 343h7v30h-7" />
      </g>
      <g className={styles.planText}>
        <text x="79" y="103" textAnchor="middle">BEDROOM 2</text>
        <text x="79" y="115" textAnchor="middle">4.20 x 3.40m</text>
        <text x="99" y="176" textAnchor="middle">SHOWER</text>
        <text x="99" y="186" textAnchor="middle">ROOM</text>
        <text x="113" y="222" textAnchor="middle">LINEN</text>
        <text x="79" y="273" textAnchor="middle">BEDROOM 3</text>
        <text x="79" y="285" textAnchor="middle">3.10 x 3.20m</text>
        <text x="79" y="350" textAnchor="middle">BEDROOM 4</text>
        <text x="79" y="362" textAnchor="middle">4.20 x 3.20m</text>
      </g>
    </svg>
  );
}

const floors = [
  { name: "Ground Floor", drawing: <GroundFloor /> },
  { name: "First Floor", drawing: <FirstFloor /> },
  { name: "Second Floor", drawing: <SecondFloor /> },
] as const;

export function Specifications() {
  return (
    <section className={styles.specifications} aria-labelledby="specifications-title">
      <div className={styles.detailsPanel}>
        <div>
          <span className={styles.badge}>Floor Plan &amp; Specifications</span>
          <h2 id="specifications-title" className={styles.title}>
            Specifications
          </h2>
        </div>

        <dl className={styles.detailsList}>
          {details.map(([label, value]) => (
            <div className={styles.detailRow} key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.floorPanel} aria-label="Floor plans">
        {floors.map(({ name, drawing }) => (
          <figure className={styles.floor} key={name}>
            {drawing}
            <figcaption>{name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Specifications;
