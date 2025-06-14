import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';
import Header from '../pageobjects/header';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

When('They go to the home page', function () {
    HomePage.open();
});

Then('They see the demo instructions', function () {
    cucumberJson.attach("Loging something important.");
    const titleElem = HomePage.title;
    expect(titleElem).toHaveText('Welcome to the Declarative Gherkin Demo!');
    const appTitleElem = HomePage.applicationTitle;
    expect(appTitleElem).toHaveText('New Credit Card Submissions Applciation');
    const usingAppTitleElem = HomePage.usingAppTitle;
    expect(usingAppTitleElem).toHaveText('Using the App');
});

Then('They see the header', function () {
    const headerLogoLinkElem = Header.headerLogoLink;
    expect(headerLogoLinkElem).toHaveChildren(1);
    expect(headerLogoLinkElem).toHaveLink('/');
    const headerTitleElem = Header.headerTitle;
    expect(headerTitleElem).toHaveText('First Bank of Change');
});

Then('They see they can login', function () {
    const signInBtnElem = Header.signinButton;
    expect(signInBtnElem).toBeDisplayed();
    const signOutBtnElem = Header.signoutButton;
    expect(signOutBtnElem).not.toBeDisplayed();
});
