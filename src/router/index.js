import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: () => import("../views/Login/CreateAccount.vue"),
  },
  {
    path: "/create-account-2",
    name: "CreateAccount_2",
    component: () => import("../views/Login/CreateAccount_2.vue"),
  },
  {
    path: "/create-account-afp",
    name: "CAApplyPassword",
    component: () => import("../views/Login/CAApplyPassword.vue"),
  },
  {
    path: "/create-account-afp-2",
    name: "CAApplyPassword_2",
    component: () => import("../views/Login/CAApplyPassword_2.vue"),
  },
  {
    path: "/create-account-afp-done",
    name: "CreateAccount_done",
    component: () => import("../views/Login/CreateAccount_done.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../views/Reset/ResetPassword.vue"),
  },
  {
    path: "/reset-password-otp",
    name: "ResetPassword_otp",
    component: () => import("../views/Reset/ResetPassword otp.vue"),
  },
  {
    path: "/reset-password-done",
    name: "ResetPassword_done",
    component: () => import("../views/Reset/ResetPassword_done.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPw",
    component: () => import("../views/Forgot/ForgotPw.vue"),
  },
  {
    path: "/forgot-password-post",
    name: "ForgotPw_post_request",
    component: () => import("../views/Forgot/ForgotPw_post_request.vue"),
  },
  {
    path: "/forgot-password-otp",
    name: "ForgotPw_otp_request",
    component: () => import("../views/Forgot/ForgotPw_otp_request.vue"),
  },
  {
    path: "/forgot-password-post-done",
    name: "ForgotPw_post_done",
    component: () => import("../views/Forgot/ForgotPw_post_done.vue"),
  },
  {
    path: "/forgot-password-otp-done",
    name: "ForgotPw_otp_done",
    component: () => import("../views/Forgot/ForgotPw_otp_done.vue"),
  },
  {
    path: "/instructions",
    component: () => import("../views/Instructions/Instructions.vue"),
    children: [
      { path: "", redirect: "/instructions/overview" },
      {
        path: "/instructions/overview",
        name: "InOverview",
        component: () => import("../views/Instructions/In_Overview.vue"),
      },
      {
        path: "/instructions/demo",
        name: "InDemo",
        component: () => import("../views/Instructions/In_Demo.vue"),
      },
      {
        path: "/instructions/procedures",
        name: "InProcedures",
        component: () => import("../views/Instructions/In_Procedures.vue"),
      },
      {
        path: "/instructions/guideline",
        name: "InGuideline",
        component: () => import("../views/Instructions/In_Guideline.vue"),
      },
      {
        path: "/instructions/form",
        name: "InForm",
        component: () => import("../views/Instructions/In_Form.vue"),
      },
      {
        path: "/instructions/policy",
        name: "InPolicy",
        component: () => import("../views/Instructions/In_Policy.vue"),
      },
    ],
  },
  {
    path: "/my-account",
    component: () => import("../views/MyAccount/MyAccount.vue"),
    children: [
      { path: "", redirect: "/my-account/home" },
      {
        path: "/my-account/home",
        name: "MAHome",
        component: () => import("../views/MyAccount/MAHome.vue"),
      },
      {
        path: "/my-account/home-ongoing",
        name: "MAHome2",
        component: () => import("../views/MyAccount/MAHome_2.vue"),
      },
      {
        path: "/my-account/home-nr",
        name: "MAHomeNR",
        component: () => import("../views/MyAccount/MAHome_NR.vue"),
      },
      {
        path: "/my-account/home-nominate",
        name: "MAHomeNominate",
        component: () => import("../views/MyAccount/MAHome_Nominate.vue"),
      },
      {
        path: "/my-account/home-detail-1",
        name: "MAHomeDetail",
        component: () => import("../views/MyAccount/MAHome_Detail.vue"),
      },
      {
        path: "/my-account/home-detail-2",
        name: "MAHomeDetail_1",
        component: () => import("../views/MyAccount/MAHome_Detail_1.vue"),
      },

      {
        path: "/my-account/home-detail-3",
        name: "MAHomeDetail_2",
        component: () => import("../views/MyAccount/MAHome_Detail_2.vue"),
      },
      {
        path: "/my-account/payment",
        name: "MAPayment",
        component: () => import("../views/MyAccount/MAPayment.vue"),
      },
      {
        path: "/my-account/profile",
        name: "MAProfile",
        component: () => import("../views/MyAccount/MAProfile.vue"),
      },
    ],
  },
  {
    path: "/faq",
    component: () => import("../views/FAQ/FAQ.vue"),
    children: [
      { path: "", redirect: "/faq/dca" },
      {
        path: "/faq/dca",
        name: "FAQDca",
        component: () => import("../views/FAQ/FAQ_Dca.vue"),
      },
      {
        path: "/faq/online-payment",
        name: "FAQOnlineP",
        component: () => import("../views/FAQ/FAQ_OnlineP.vue"),
      },
    ],
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/new",
    component: () => import("../views/New/New.vue"),
    children: [
      { path: "", redirect: "/new/tac" },
      {
        path: "/new/tac",
        name: "NewTac",
        component: () => import("../views/New/New_Tac.vue"),
      },
      {
        path: "/new/info-r-premises",
        name: "NewInfoPremises",
        component: () => import("../views/New/New_InfoPremises.vue"),
      },
      {
        path: "/new/info-of-applicant",
        name: "NewInfoApplicant",
        component: () => import("../views/New/New_InfoApplicant.vue"),
      },
      {
        path: "/new/info-r-management",
        name: "NewInfoManagement",
        component: () => import("../views/New/New_InfoManagement.vue"),
      },
      {
        path: "/new/mode-of-operation",
        name: "NewModeOp",
        component: () => import("../views/New/New_ModeOp.vue"),
      },
      {
        path: "/new/upload-doc",
        name: "NewUploadDoc",
        component: () => import("../views/New/New_UploadDoc.vue"),
      },
      {
        path: "/new/identity-auth",
        name: "NewIdentityAuth",
        component: () => import("../views/New/New_IdentityAuth.vue"),
      },
      {
        path: "/new/confirmation",
        name: "NewConfirmation",
        component: () => import("../views/New/New_Confirmation.vue"),
      },
      {
        path: "/new/submitted",
        name: "NewSubmitted",
        component: () => import("../views/New/New_Submitted.vue"),
      },
    ],
  },
  {
    path: "/renewal",
    component: () => import("../views/Renewal/Renewal.vue"),
    children: [
      { path: "", redirect: "/renewal/tac" },
      {
        path: "/renewal/tac",
        name: "RenewalTac",
        component: () => import("../views/Renewal/Renewal_Tac.vue"),
      },
      {
        path: "/renewal/info-of-applicant",
        name: "RenewalInfoApplicant",
        component: () => import("../views/Renewal/Renewal_InfoApplicant.vue"),
      },
      {
        path: "/renewal/info-r-premises",
        name: "RenewalInfoPremises",
        component: () => import("../views/Renewal/Renewal_InfoPremises.vue"),
      },
      {
        path: "/renewal/info-r-management",
        name: "RenewalInfoManagement",
        component: () => import("../views/Renewal/Renewal_InfoManagement.vue"),
      },
      {
        path: "/renewal/mode-of-operation",
        name: "RenewalModeOp",
        component: () => import("../views/Renewal/Renewal_ModeOp.vue"),
      },
      {
        path: "/renewal/upload-doc",
        name: "RenewalUploadDoc",
        component: () => import("../views/Renewal/Renewal_UploadDoc.vue"),
      },
      {
        path: "/renewal/identity-auth",
        name: "RenewalIdentityAuth",
        component: () => import("../views/Renewal/Renewal_IdentityAuth.vue"),
      },
      {
        path: "/renewal/confirmation",
        name: "RenewalConfirmation",
        component: () => import("../views/Renewal/Renewal_Confirmation.vue"),
      },
      {
        path: "/renewal/submitted",
        name: "RenewalSubmitted",
        component: () => import("../views/Renewal/Renewal_Submitted.vue"),
      },
    ],
  },
  {
    path: "/transfer",
    component: () => import("../views/Transfer/Transfer.vue"),
    children: [
      { path: "", redirect: "/transfer/tac" },
      {
        path: "/transfer/tac",
        name: "TransferTac",
        component: () => import("../views/Transfer/Transfer_Tac.vue"),
      },
      {
        path: "/transfer/declaration",
        name: "TransferDeclaration",
        component: () => import("../views/Transfer/Transfer_Declaration.vue"),
      },
    ],
  },
  {
    path: "/nomination",
    component: () => import("../views/Nomination/Nomination.vue"),
    children: [
      { path: "", redirect: "/nomination/info" },
      {
        path: "/nomination/info",
        name: "NominationInfo",
        component: () => import("../views/Nomination/Nomination_Info.vue"),
      },
      {
        path: "/nomination/confirmation",
        name: "NominationConfirmation",
        component: () =>
          import("../views/Nomination/Nomination_Confirmation.vue"),
      },
    ],
  },
  {
    path: "/amendment",
    component: () => import("../views/Amendment/Amendment.vue"),
    children: [
      { path: "", redirect: "/amendment/tac" },
      {
        path: "/amendment/tac",
        name: "AMTac",
        component: () => import("../views/Amendment/AM_Tac.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
