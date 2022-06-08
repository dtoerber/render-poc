import { CommonModule } from '@angular/common';
import { RoutingService, ANALYTICS_TOKEN } from 'spectrum-utilities';
import { MockRoutingService, MockAnalytics } from 'spectrum-utilities/testing';
import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { TvOfferDetailsCardComponent } from './tv-offer-details-card.component';
import { CmsSharedComponentsModule, NetworkLogoModule, CmsBaseComponentModule } from 'change-service-lib';
import { NgkButtonModule } from '@ng-kite/core/button';
import { NgkLinkModule } from '@ng-kite/core/link';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ClickKeydownModule } from 'spectrum-components';

const logoUrlBase = 'https://cdnimg.spectrum.net/imageserver/guide/';
const iconWidth = '78px';
const iconSet1 = [
  {
    name: 'HGTV',
    logoUrl: `${logoUrlBase}49788`,
    iconWidth,
  },
  {
    name: 'ESPN',
    logoUrl: `${logoUrlBase}32645`,
    iconWidth,
  },
  {
    name: 'Paramount Network',
    logoUrl: `${logoUrlBase}59186`,
    iconWidth,
  },
  {
    name: 'Discovery',
    logoUrl: `${logoUrlBase}56905`,
    iconWidth,
  },
  {
    name: 'TNT',
    logoUrl: `${logoUrlBase}42642`,
    iconWidth,
  },
];
const iconSet2 = [
  {
    name: 'Telemundo',
    logoUrl: `${logoUrlBase}10239`,
    iconWidth,
  },
  {
    name: 'Univision',
    logoUrl: `${logoUrlBase}11118`,
    iconWidth,
  },
  {
    name: 'Galavision',
    logoUrl: `${logoUrlBase}68367`,
    iconWidth,
  },
  {
    name: 'ESPN Deportes',
    logoUrl: `${logoUrlBase}25595`,
    iconWidth,
  },
  {
    name: 'Discovery en Espanol',
    logoUrl: `${logoUrlBase}19247`,
    iconWidth,
  },
];

export default {
  title: 'CMS/TV/TvOfferDetailsCardComponent',
  component: TvOfferDetailsCardComponent,
  args: {
    cardLabel: 'EVERYTHING PACKAGE',
    cardTitle: 'TV SELECT',
    channelNumberHeading: '140+',
    channelNumberSubHeading: 'channels',
    description: 'The ultimate in lifestyle, news, sports and movie favorites plus regional sports and locals.',
    descriptionLink: { url: '', label: 'View Select TV Channels' },
    price: 19.99,
    priceValidPeriod: 'for 12 mo',
    ctaLabel: 'Choose',
    networkIcons: iconSet1,
  },
  argTypes: {
    onDescriptionLinkClicked: { action: 'descriptionLinkClicked' },
    onCtaClicked: { action: 'ctaClicked' },
  },

  parameters: { backgrounds: { default: 'light' }, layout: 'none' },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        CmsBaseComponentModule,
        NetworkLogoModule,
        CmsSharedComponentsModule,
        NgkButtonModule,
        NgkLinkModule,
        ClickKeydownModule,
      ],
      declarations: [TvOfferDetailsCardComponent],
      providers: [
        { provide: RoutingService, useClass: MockRoutingService },
        { provide: ANALYTICS_TOKEN, useClass: MockAnalytics },
        { provide: Store, useValue: { select: () => of(null) } },
      ],
    }),
    componentWrapperDecorator(story => `<div style="padding: 0.5rem">${story}</div>`),
  ],
} as Meta;

const Template: Story<TvOfferDetailsCardComponent> = (args: TvOfferDetailsCardComponent) => ({
  props: args,
});

export const TvSelect = Template.bind({});
TvSelect.args = {};

export const MiPlan = Template.bind({});
MiPlan.args = {
  cardLabel: 'EN ESPAÑOL PACKAGE',
  cardTitle: 'MI PLAN LATINO TV',
  channelNumberHeading: '140+',
  channelNumberSubHeading: 'channels',
  description: 'Obtenga sus canales favoritos en español y aún mas canales en Inglés con miles de opciones On Demand.',
  descriptionLink: { url: '', label: 'View Mi Plan Latino Channels' },
  price: 34.99,
  priceValidPeriod: 'for 12 mo',
  ctaLabel: 'Choose',
  networkIcons: iconSet2,
};
