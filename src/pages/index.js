import dynamic from 'next/dynamic';
const Seo = dynamic(import('components/seo'),{ssr:false});
const Layout = dynamic(import('components/layout'),{ssr:false});
const Banner = dynamic(import('sections/banner'),{ssr:false});
const WhyChoose = dynamic(import('sections/why-choose'),{ssr:false});
const SalesInvestment = dynamic(import('sections/sales-investment'),{ssr:false});
const RoadMap = dynamic(import('sections/roadmap'),{ssr:false});
const CountDownBlock = dynamic(import('sections/countdown'),{ssr:false});
const WorldwideUsers = dynamic(import('sections/worldwide-user'),{ssr:false});
const OurWallet = dynamic(import('sections/our-wallet'),{ssr:false});
const CallToAction = dynamic(import('sections/call-to-action'),{ssr:false});
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';

export default function IndexPage() {
  return typeof window !== 'undefined' ?(
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Seo
              description = 'The Newest NFT project with its own Crypto Wallet!, Newest NFT project is coming! Lets jump into this project where it will have its own Crypto wallet. It will be fast and easy for users, and we will make sure that it is user friendly in every way.'
              title = 'Meta Network | Meta Coin'
          />
          <Banner />
          <WhyChoose />
          <SalesInvestment />
          <RoadMap />
          <CountDownBlock />
          <WorldwideUsers />
          <OurWallet />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  ):(null)
}
