import logo from "../images/logo_codeup.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.42%",
  APRRange60: "12.76%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.42%",
      financeCharge36: "$2,371.56",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.76%",
      financeCharge60: "$4,135.64",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "4", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "PROGRAM NAME",
      APR36: "XX.XX%",
      financeCharge36: "$X,XXX.XX",
      FullMonthlyPayment36: "$XXX.XX",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const interestRateCards = {
  // 3 month program, 3 months grace for term details section
  APR36: "8.87 - 16.43%",
  APR60: "9.90 - 16.87%",
  immediateRepayment: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "9.82% - 17.21%",
    // APR60: "10.34% - 17.24%",
  },
  interestOnly: {
    int36: "6.50 - 13.75%",
    int60: "8.25 - 15.00%",
    // APR36: "8.87 - 16.29%",
    // APR60: "9.96 - 16.87%",
  },
  deferred: {
    int36: "7.00 - 14.25%",
    int60: "8.75 - 15.50%",
    // APR36: "9.24 - 16.43%",
    // APR60: "9.90 - 16.68%",
  },
}

export const previewText = {
  headline: "Simple. Flexible.",
  subheadline:
    "We offer loans tailored to your needs. Preview your options and select the right financing solution for you.",
  // headline: "Simple. Clear.",
  // subheadline:
  //   "We offer a straightforward loan so you can focus on your program and transform your future.",
  cards: [
    {
      heading: "Deferred Repayment",
      body: "Make no payments while you study and for three months after.",
    },
    {
      heading: "Interest Only",
      body:
        "Make low interest-only payments while you study and for three months after completing your program.",
    },
    // {
    //   heading: "Immediate Repayment",
    //   body: "Start paying your loan back one month after your program begins.",
    // },
    // {
    //   heading: "36-Month Loan",
    //   // body:
    //   //   "Pay off your loan faster. Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    //   body:
    //     "Start paying your loan back one month after your program begins, and make 36 monthly payments until your loan is repaid.",
    // },
    // {
    //   heading: "60-Month Loan",
    //   body:
    //     "Make smaller monthly payments. Start paying your loan back one month after your program begins, and make 60 monthly payments until your loan is repaid.",
    // },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.42%",
  APR60: "12.76%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Codeup's Full Stack Bootcamp",
      maxAmount: "$26,500",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Codeup's Data Science program",
      maxAmount: "$26,500",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Codeup"

export const schoolURL = "https://codeup.com/" // update with url of school's website

export const skfURL = "https://codeup.skills.fund" // update with Skills Fund url

export const headline = "Learn to Code at Codeup" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} offers programs that provide students with a foundation for a career in software development or data science. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Full-Stack Bootcamp and Data Science program. Please note: Data Science is only available in San Antonio.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "codeup_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "666c25e3-b0bb-480b-a813-4dd3d485807e" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_codeup_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Full-Stack Bootcamp",
    url: "https://my.skills.fund/application?lenderCode=SFCUP19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 26500,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 8,
        apr36: 11.42,
        apr60: 12.76,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 26500,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 11.42,
            apr60: 12.76,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Data Science",
    url: "https://my.skills.fund/application?lenderCode=SFCUPDS19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 26500,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 8,
        apr36: 11.42,
        apr60: 12.76,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 26500,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 11.42,
            apr60: 12.76,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  // 	name: 'Data Science',
  // 	url: 'https://my.skills.fund/application?lenderCode=LENDERCODE2',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 10995,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 5,
  // 			apr36: 11.16,
  // 			apr60: 12.51
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro 1', 'Metro 2' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro 1',
  // 			loanInfo: {
  // 				// match loanInfo to Program 2 loanInfo above
  // 				maxLoanAmt: 10995,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro 2',
  // 			loanInfo: {
  // 				maxLoanAmt: 15545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  // {
  // 	name: 'Program 3',
  // 	url: 'https://my.skills.fund/application?lenderCode=LENDERCODE3',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 15995,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 5,
  // 			apr36: 11.16,
  // 			apr60: 12.51
  // 		},
  // 		'Immediate Repayment': {
  // 			apr36: 11.25,
  // 			apr60: 12.55
  // 		}
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro A', 'Metro B', 'Metro C' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro A',
  // 			loanInfo: {
  // 				// match loanInfo to Program 3 loanInfo above
  // 				maxLoanAmt: 15995,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': {
  // 					apr36: 11.25,
  // 					apr60: 12.55
  // 				}
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro B',
  // 			loanInfo: {
  // 				maxLoanAmt: 15545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': {
  // 					apr36: 11.25,
  // 					apr60: 12.55
  // 				}
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro C',
  // 			loanInfo: {
  // 				maxLoanAmt: 20545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': {
  // 					apr36: 11.25,
  // 					apr60: 12.55
  // 				}
  // 			}
  // 		}
  // 	]
  // }
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $26,500 for Codeup's Full Stack Bootcamp or Data Science program tuition."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
