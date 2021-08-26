<template>
  <div class="content-div">
    <h1>Online Payment</h1>
    <v-expansion-panels multiple > 
      <OlsExpansion v-for="(item,i) in items" :key="i" :order="i+1" :title="item.title" :type="0"><div v-html="item.content"></div></OlsExpansion>
      <OlsExpansion :order="special.order" :title="special.title" :type="0">
        <p class="expansion">PPS has updated the system requirements with effect from 15 October 2009. Users who do not have Transport Layer Security (TLS) enabled in the browser or Java software would not be able to pay with PPS. Please check and update the settings of your browser and Java software according to the system requirements set out in the <a href="http://www.ppshk.com/hkt/revamp2/English/sys_req_sysConfig.html" target="_blank">PPS website</a>. <span>(http://www.ppshk.com/hkt/revamp2/English/sys_req_sysConfig.html).</span><br/><br/>Please note that you may need to restart your browser for the new settings to be effective.<br/><br/>If your browser does not have TLS enabled, you may get the following error message after choosing PPS payment:<br/><br/>
          <strong class="i">Error message in Internet Explorer:</strong>
        </p>
        <img class="expansion" src="../../assets/faq/errorMessageIE.jpg" alt="Error message in Internet Explorer" width="234" height="294">
        <p class="expansion"><strong class="i">Error message in Firefox:</strong></p>
        <img class="expansion" src="../../assets/faq/errorMessageFirefox.jpg" alt="Error message in Firefox:" width="405" height="292">
        <p class="expansion">If TLS is enabled in your browser but not in Java, you may still be able to access the PPS payment gateway. However, after you input your Account Name and password, you would see the error message below.</p>
        <img class="expansion" src="../../assets/faq/pps_error.jpg" alt="" width="502" height="257">
        <p class="expansion">After pressing the “OK” button, you would see the PPS Account Name and password page again but would not be able to proceed with payment. You may cancel the payment, change the settings in Java, re-start your browser and then retry. You may also switch to pay by credit card.</p>
      </OlsExpansion>
    </v-expansion-panels>
  </div>
  
</template>

<script>
import BoldLine from '../../components/misc/bold-line'
import OlsExpansion from '../../components/misc/ols-expansion'

export default {
  name: 'FAQOnlineP',
  components: {
    BoldLine,
    OlsExpansion,
  },
  data: function () {
    return {
      items:[
          {
            title:'How do I pay for online licence services?',
            content:'<p class="expansion">GovHK online licence services generally accept credit cards (Visa and MasterCard) and PPS payment.</p>',
          },{
            title:'Who receives my credit card or PPS information when I enter it for an online licence service?',
            content:'<p class="expansion">Your credit card or PPS information is captured by the payment service provider (e.g. EPSCO or a credit card acquiring bank). Liquor Licence Processing System (LLPS) and the Government bureau or department cannot access such information.</p>',
          },{
            title:'What should I do if my browser does not respond during the payment process?',
            content:'<p class="expansion">The screen that prompts you to select payment method provides a Transaction Reference Number (TRN), with which you can check the status of your payment if you encounter any problems during the payment process. Please ensure that your first payment has not been effected before proceeding to make a second attempt.</p>'
          },{
            title:'How do I find out if the Government has received my payment for the online licence service?',
            content:'<p class="expansion">After completing an online service, you should print and retain the payment receipt page, which contains key information about the transaction or a reference number that would allow you to check the transaction status with the department when necessary.</p>'
          },{
            title:'How do I make PPS payments for online licence services? Do I need to register?',
            content:'<p class="expansion">When you make online PPS payments, you will need to input both your PPS account number and your PPS Internet password for each payment. Please visit the PPS website to find out how to register for a PPS Internet password, as well as details on browser compatibility and other technical information.</p>'
          },{
            title:'I have two Visa cards issued by different banks. Why is one card accepted for online licence services but not the other?',
            content:'<p class="expansion">At present, only Visa and MasterCard are accepted for credit card payment on online licence services. Some Visa card and MasterCard issuers do not support online payment, i.e. they issue credit cards mainly for retail transactions where merchants can check the physical card. Thus if your credit card is not accepted for the online licence service, please check with your card issuers to ascertain if they support online payment.<br/><br/>On the other hand, both Visa and MasterCard offer additional security programmes to give their cardholders extra protection when they make online payments. There is a possibility that your card issuer would decline your online payment request if you have not registered for these security programmes. Please contact your card issuer for the registration. More details are also available from the Visa and MasterCard websites.</p><ul class="expansion"><li><div><a href="http://www.hongkongpost.gov.hk/product/ecert/type/smartid/index.html" target="_blank"><p>Verified by Visa authentication service</p></a><p><span>(http://www.hongkongpost.gov.hk/product/ecert/type/smartid/index.html) (VbV)</span></p></div></li><li><div><a href="http://www.hongkongpost.gov.hk/support/faq/index.html#J" target="_blank"><p>MasterCard SecureCode</p></a><p><span>(http://www.hongkongpost.gov.hk/support/faq/index.html#J)</span></p></div></li></ul>'
          },{
            title:'Does my computer system need to be of any specific configuration to perform credit card payments for online licence services?',
            content:"<p class='expansion'>There is generally no system requirement. But if you have registered for Visa and MasterCard's security programmes (i.e. Verified by Visa (VbV) and MasterCard SecureCode), you may need to enable your browser to accept cookies from your credit card issuer's website. You are advised to check with your credit card issuer if they have imposed any other specific system requirements.</p>"
          },{
            title:'I failed to make payment when I was using an online licence service. The error message code was "PAY-E-9017". What should I do?',
            content:'<p class="expansion">The GovHK payment system makes use of certificates issued by the Hongkong Post and your browser cannot recognise these certificates. Please visit the following page to download and install the Hongkong Post Root CA Certificates:</p><ul class="expansion"><li><div><a href="http://www.hongkongpost.gov.hk/product/download/root/index.html" target="_blank"><p>Hongkong Post Root CA Certificates</p></a><p><span>(http://www.hongkongpost.gov.hk/product/download/root/index.html)</span></p></div></li></ul>'
          },{
            title:'If the Government needs to refund to me the money that I paid via online payment, how will the refund be made?',
            content:'<p class="expansion">If the payment is paid by PPS, the department would normally issue a refund cheque to you. If the payment is made by credit card online, normally, refund can only be made to the credit card account that was used for the payment. Please note that if your credit card account has been cancelled when the refund is made, some card issuing banks may charge you for an administration fee before you can get back the money. The Government would not be able to check whether your credit card account is still active before making the refund because the Government does not know your credit card number.</p>'
          },{
            title:'When I use my credit card for payment, why am I sometimes required to enter a password for Verified by Visa (VbV) / MasterCard SecureCode and sometimes not?',
            content:'<p class="expansion">Currently, not all credit card issuing banks have participated in VbV or MasterCard SecureCode. Some issuing banks may enable VbV or MasterCard SecureCode selectively, e.g. only for payment above a certain amount. Some of the online services may not enable VbV or MasterCard SecureCode at certain situations due to different reasons.</p>'
          }
      ],
      special:{
          order: 11,
          title:'I cannot use PPS for online payment recently. I have been using PPS payment in the past. Why does this happen and what can I do?',
          content:'<img :src="logo" alt="Error message in Internet Explorer" width="234" height="294">'
      },
    }
  },
}
</script>

<style lang="scss">
p.expansion{
  margin-left:60px;
  strong.i{
       font-style: italic;
  }
  span{
    word-wrap: break-word;
  }
}
a{
      text-decoration: none !important;
    p{
      color:$ols-primary !important;
    }
}
ul.expansion{
  margin-left:140px;
  
  li{
    margin-bottom:12px;
    p{
      margin:0px;
      span{
        word-wrap: break-word;
      }
    }
  }
}

img.expansion{
  margin-left:60px;
  margin-bottom:16px;
}
//md and down
@media screen and (max-width: 1263px) {
  
}

</style>