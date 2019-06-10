import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For Emotion snapshot serializer
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';
expect.addSnapshotSerializer(createSerializer(emotion));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// for mocking fetch requests
global.fetch = require('jest-fetch-mock');
