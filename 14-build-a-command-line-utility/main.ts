import { parseArgs } from "jsr:@std/cli/parse-args";

const args = parseArgs(Deno.args, {
  alias: {
    help: "h",
    resort: "r"
  },
  default: {
    resort: "Whistler"
  }
});

const resorts = {
  Whistler: {
    elevation: 2214,
    snow: "Powder",
    expectedSnowfall: 20
  },
  Aspen: {
    elevation: 7945,
    snow: "Packed Powder",
    expectedSnowfall: 15
  },
  Vail: {
    elevation: 8120,
    snow: "Powder",
    expectedSnowfall: 25
  },
  Crystal: {
    elevation: 4400,
    snow: "Packed Powder",
    expectedSnowfall: 10
  }
};

const resortName = args.resort as keyof typeof resorts;
const resort = resorts[resortName];

if (!resort) {
  console.error(
    `Resort ${resortName} not found. Try Whistler, Aspen, Vail, or Crystal.`
  );
  Deno.exit(1);
}

console.log(`
  Resort: ${resortName}
  Elevation: ${resort.elevation} feet
  Snow Conditions: ${resort.snow}
  Expected Snowfall: ${resort.expectedSnowfall}
`);

if (args.help) {
  console.log(`
    Usage: ski-cli --resort <resort name>
    -h, --help       Show help
    -r, --resort     Name of the ski resort (default: Whistler)
  `);
  Deno.exit(0);
}
