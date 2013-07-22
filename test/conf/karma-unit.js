basePath = '../../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/*.js',
  'public/js/lib/*.js',
  'test/unit/*.js',
  'public/app/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
