import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

import { AppScreen, AppHeader, } from '../components/'

const { width, height } = Dimensions.get('screen');

export default function Privacy({ navigation }) {
    return (
        <AppScreen>
            <View style={styles.container}>
                <AppHeader title='Privacy Policy' onPress={() => navigation.openDrawer()} />
                <ScrollView style={{ minHeight: height - 80, width, padding: 30 }}>
                    <Text style={styles.heading}>The Lingo Privacy Policy</Text>
                    <Text style={{ marginVertical: 10 }}>Privacy Policy</Text>
                    <Text style={{ fontSize: 17, marginBottom: 100 }}>
                        Your privacy is important to us. It is EZIC policy to respect your privacy regarding any information we may collect from you through our app, The Lingó app.
                        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. In this privacy policy we share what, how and why we’re collecting it and how it will be used.
                        We only retain collected information for as long as necessary to provide you with the service promised through The Lingó app . What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                        We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                        Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                        You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                        Your continued use of our App – The Lingó app will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                        This policy is effective as of 01 January 2022.
                        THE DETAILS
                        In this Privacy Policy, ‘us’ ‘we’ or ‘our’ means EZIC and our App The Lingó app. We are committed to respecting your privacy. Our Privacy Policy sets out how we collect, use, store and disclose your personal information.
                        By providing personal information to us, you consent to our collection, use and disclosure of your personal information in accordance with this Privacy Policy and any other arrangements that apply between us. We may change our Privacy Policy from time to time by publishing changes to it on our website. We encourage you to check our website periodically to ensure that you are aware of our current Privacy Policy.
                        Personal information includes information or an opinion about an individual that is reasonably identifiable. For example, this may include your name, field of study and contact details.
                        Information we collect
                        We store the following information about you that fall into three categories.
                        Mandatory – information that helps you access the app:
                        • Your email address
                        • Your password
                        • Device name
                        • Last connected IP address
                        Functional – information that helps you use the app for its intended purpose:
                        • Video recordings, audio and speech to text conversion of saved interviews
                        Optional – information that helps further personalise your experience:
                        • Your first name and last name
                        • Your field of study
                        • Type of study
                        • The name of your affiliated organisation – e.g. which university you attend or your current employer
                        • Any additional information relating to you that you provide to us directly through our app or website or indirectly through your use of our app or website or online presence or through other websites or accounts from which you permit us to collect information;
                        • Information you provide to us through customer surveys; or
                        How we collect information
                        We may collect these types of personal information either directly from you, or from third parties. We may collect this information when you:
                        • Sign-up on app or visit our website;
                        • Communicate with us through correspondence, chats, email, or when you share information with us from other social applications, services or websites; or
                        • Interact with our sites, services, content and advertising
                        Technical basics
                        If you enable notifications, we must store a token to send them. We may use notifications to remind your of new services in the app or provide motivation to support your job search journey.
                        If you upload files to Interview Trainer, we need to store them until you delete them.
                        We use cookies on the site and similar tokens in the app to keep you logged in. Our server software may also store basic technical information, such as your IP address, in temporary memory or logs.
                        Ads and analytics
                        The Lingó app’s app collects aggregate, anonymous statistics, such as the percentage of users who use particular features, to improve the app and provide a more personalised experience for Interview Trainer users..
                        Personal data used to target The Lingó app’s ads include: the categories of interviews you choose, your field of study, study type and institution. Each ad collects, and shares with its advertiser, only three numbers: total views, total taps, and total subscriptions from the ad.
                        Information usage
                        Overall we use the information we collect to operate and improve our app, services, and customer support. Furthermore information is used for the following purposes:
                        • To enable you to access and use our app and our website;
                        • To operate, protect, improve and optimise our app, business and our users’ experience, such as to perform analytics, conduct research and for advertising and marketing;
                        • To send you service, support and administrative messages, reminders, technical notices, updates, security alerts, and information requested by you;
                        • To send you marketing and promotional messages and other information that may be of interest to you, including information sent by, or on behalf of, our business partners that we think you may find interesting;
                        • To administer rewards, surveys, contests, or other promotional activities or events sponsored or managed by us or our business partners; and
                        • To comply with our legal obligations, resolve any disputes that we may have with any of our users, and enforce our agreements with third parties
                        We do not share personal information with outside parties except to the extent necessary to accomplish The Lingó app’s functionality. We may share anonymous, aggregate statistics with outside parties, such as how many people are using the app and the types of interviews they are trying.
                        We may disclose your information in response to witness summons (subpoenas), court orders, or other legal requirements; to exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property.
                        In the future, we may sell to, buy, merge with, or partner with other businesses. In such transactions, user information may be among the transferred assets.
                        Security
                        We implement a variety of security measures to help keep your information secure. For instance, all communication with the app and website requires HTTPS with certificate pinning. Passwords are hashed, not stored, using industry-standard methods.
                        Accessing, changing, or deleting your information
                        You may access or change your name, organisation, field of study and study type from The Lingó app iOS app. Should you wish to change your email address (used for logging in), delete your account or access personal information we hold about you, you can do so by contacting us on ezic.thelingo@godwinsandcogroup.com. We will get back to you within 5 business days. Business days are Monday, Tuesday, Wednesday, Thursday and Friday. We may need to verify your identity when you request personal information. Sometimes we may be unable to provide you with access to all your information and when this is the case, we will tell you why.
                        Deleted information may be kept in backups for up to 90 days. Backups are encrypted and are only accessed if needed for disaster recovery.
                        Third-party links and content
                        Interview Trainer does not display advertisements to third parties including links and content from third-parties. Any changes to display of advertisements will be included in this privacy policy.
                        Children’s Online Privacy Protection Act Compliance
                        We never collect or maintain information on our app from those we actually know are under 13, and no part of our app is structured to attract anyone under 13.
                        International Transfers of Information
                        Information may be processed, stored, and used outside of the country in which you are located. Data privacy laws vary across jurisdictions, and different laws may be applicable to your data depending on where it is processed, stored, or used.
                        Your Consent
                        By using our site or apps, you consent to our privacy policy.
                        Contacting Us
                        If you have questions regarding this privacy policy, you may email <Text style={{ textDecorationLine: 'underline', fontSize: 18 }}>ezic.thelingo@godwinsandcogroup.com.</Text>
                        Changes to this policy
                        If we decide to change our privacy policy, we will post those changes on this page. Summary of changes so far:</Text>
                </ScrollView>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    heading: {
        fontSize: 25,
        color: 'black',
        marginBottom: 20
    }
});