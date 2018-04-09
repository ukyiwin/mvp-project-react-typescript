import * as React from 'react';
// import { track } from 'src/helpers/events';
import { Wrapper } from '../style';
import {
  ContentContainer,
  Heading,
  Copy,
  Section,
  SectionTitle,
  SectionDescription,
} from 'Components/Pricing/style';
import { PrivacyTermsList } from './style';

class Terms extends React.Component<{}> {
  componentDidMount() {
    // track('terms', 'viewed', null);
  }

  render() {
    return (
      <Wrapper data-cy="terms-page">
        <ContentContainer>
          <Heading>Terms of Service</Heading>

          <Copy>We are a social network for students.</Copy>

          <Section>
            <SectionTitle>Eligibility of Service</SectionTitle>
            <SectionDescription>
            You are eligible to participate in this contract, and you are at least our "Minimum Age." 
            The information you provide is truthful. 
            To use our Service, you must meet the following criteria and represent and warrant that you are: 
            <br />
            <ul>
              <li>the "Minimum Age" (defined below) or greater;</li>
              <li>are currently not restricted from the Services, or are not prohibited from having a Unizonn account,</li>
              <li>are not a Unizonn competitor or are not using the Services for reasons that are in competition with Unizonn;</li>
              <li>will only maintain one Unizonn account at any given time;</li>
              <li>will use your real name and will only provide accurate information to Unizonn;</li>
              <li>have full authority and power to enter into this Agreement and in so doing shall not 
                violate all other agreement to which you are a party;</li>
              <li>will not violate any rights of Unizonn or third parties, including 
                trademark rights or intellectual property rights such as copyright; And</li>
              <li>agree to provide at your expense all equipment, software, mobile access, and Internet access required to use the Services.</li>
            </ul>
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Your Membership</SectionTitle>

            <SectionDescription>
            You will keep your password private. 
            You will not share account details with anyone else. 
            You will not copy or transfer any part of the Service. 
            The profile you create at Unizonn will become a part of Unizonn and, except for the information 
            provided by the license, is owned by Unizonn. However, between you and others, your account 
            belongs to you. You agree to:

            <br />
            <ul>
              <li>keep your password secure and confidential</li>
              <li>not allow others to use your account;</li>
              <li>not use the accounts of others;</li>
              <li>not to sell, trade or transfer your Unizonn account to another party; And</li>
              <li>Do not charge anyone for access to any part of Unizonn, or any information thereon. In 
                addition, you are responsible for everything that happens through your account until you 
                close your account or show that the security of your account was compromised due to your lack.</li>
            </ul>
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Changes to these Terms</SectionTitle>

            <SectionDescription>
            You will pay us for any loss it causes. 
            You agree to indemnify and hold us harmless from all damages, costs, and
            losses related to all charges, third party claims and investigations caused by
              <br />
              <ul>
              <li>Agreement, including, without limitation, the presentation of content that
                 violates the rights of third parties or applicable laws,</li>
              <li>any content you submit to the Services, and</li>
              <li>any activity in which you engage in or through Unizonn.</li>
              </ul>
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Privacy Policy</SectionTitle>

            <SectionDescription>
            When you share information, others can view, copy, and use that information. 
            Unizonn offers several forums such as Unizonn Groups, Answers, and Network Updates, 
            where you can post your comments and comments on the topics assigned. Unizonn also allows 
            the exchange of information by allowing users to post updates, including links to news articles
             and other information such as job opportunities, product recommendations and other profile 
             contents, parts of the site such as Unizonn Groups and Unizonn company pages. 
             Unizonn members can create Unizonn groups and business pages for free however 
             Unizonn, in its sole discretion, may close or transfer Unizonn Groups or company pages, 
             or delete the content, from them if the content violates this Agreement or the rights 
             Intellectual property rights of others. Please note that the ideas you post and the 
             information you share can be viewed and used by other Members and Unizonn cannot 
             guarantee that other Members will not use the ideas and information they share at Unizonn. 
             Therefore, if you have information or idea that you would like to keep confidential or
              you do not want others to use, or you are subject to third party rights that may be
               infringed by your sharing, do not submit it to any Unizonn group, Network or elsewhere 
               in Unizonn. UNIZONN IS NOT RESPONSIBLE FOR THE INCORRECT USE OF ANY OTHER OR THE 
               DISAPPROVEMENT OF ANY CONTENT OR INFORMATION YOU PUBLISH IN UNIZONN.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Third-Party Sites and Developers</SectionTitle>

            <SectionDescription>
            Third party websites may offer their products and services through Unizonn, and we are not responsible for these third party activities. 
            Unizonn may include links to third party websites ("Third Party Sites") at www.unizonn.com, 
            developer.unizonn.com, and elsewhere. Unizonn also allows developers of third parties 
            ("Developer Platform") to create applications ("Application Platform") that provide features and 
            functionality using data and development tools made available by Unizonn through its development platform. 
            We may display third-party ads on the website, such as advertisements, pop-up 
            text and links to third-party sites. We are not responsible for the content of 
            such advertisements or links, or for any products, services or other material 
            related to such advertisements, any associated website or any link contained in a 
            linked website. The demonstration of any advertisement or link does not imply endorsement
             by us of the ad or associated website or any content. 
            In no event are we liable, directly or indirectly, to ANYONE for any injury or 
            loss resulting from or in connection with any USE, CONTINUED USE or dependence of any 
            ADVERTISEMENT displayed on the web, any product, SERVICES OR MATERIALS implying any such 
            advertisement, ANY WEBSITE OF THIRD PARTIES ASSOCIATED, OR ANY LINK CONTAINED IN A LINKED WEB SITE.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Third-Party Services</SectionTitle>

            <SectionDescription>
              lorem ipsum
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Creating Accounts</SectionTitle>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>
          </Section>
          <Section>
            <SectionTitle>Creating Accounts</SectionTitle>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>
          </Section>
          <Section>
            <SectionTitle>Creating Accounts</SectionTitle>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>
          </Section>
          <Section>
            <SectionTitle>Creating Accounts</SectionTitle>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>
          </Section>
          <Section>
            <SectionTitle>Creating Accounts</SectionTitle>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>

            <SectionDescription>
            lorem ipsum
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Questions &amp; Contact Information</SectionTitle>

            <SectionDescription>
              Questions or comments about the Service may be directed to us at
              the email address{' '}
              <a href="mailto:support@unizonn.com">support@unizonn.com</a>.
            </SectionDescription>
          </Section>
        </ContentContainer>
      </Wrapper>
    );
  }
}
export default Terms;
