basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/*.js',
  'test/unit/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
