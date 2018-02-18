var GitHubColors = require("../lib");

console.log(GitHubColors.get("C++"));
// { type: 'programming',
//   ace_mode: 'c_cpp',
//   codemirror_mode: 'clike',
//   codemirror_mime_type: 'text/x-c++src',
//   color: '#f34b7d',
//   aliases: [ 'cpp' ],
//   extensions:
//    [ '.cpp',
//      '.c++',
//      '.cc',
//      '.cp',
//      '.cxx',
//      '.h',
//      '.h++',
//      '.hh',
//      '.hpp',
//      '.hxx',
//      '.inc',
//      '.inl',
//      '.ipp',
//      '.re',
//      '.tcc',
//      '.tpp' ],
//   language_id: 43 }

console.log(GitHubColors.ext("cpp"));
// { extensions:
//    [ '.cpp',
//      '.c++',
//      '.cc',
//      '.cp',
//      '.cxx',
//      '.h',
//      '.h++',
//      '.hh',
//      '.hpp',
//      '.hxx',
//      '.inc',
//      '.inl',
//      '.ipp',
//      '.re',
//      '.tcc',
//      '.tpp' ],
//   aliases: [ 'cpp' ],
//   type: 'programming',
//   ace_mode: 'c_cpp',
//   codemirror_mode: 'clike',
//   codemirror_mime_type: 'text/x-c++src',
//   color: '#f34b7d',
//   language_id: 43 }


// CMake doesn't have a color, so we specify in the second argument that we need to have the default color.
console.log(GitHubColors.get("CMake", true));
// { type: 'programming',
//   extensions: [ '.cmake', '.cmake.in' ],
//   filenames: [ 'CMakeLists.txt' ],
//   ace_mode: 'text',
//   codemirror_mode: 'cmake',
//   codemirror_mime_type: 'text/x-cmake',
//   language_id: 47,
//   color: '#ccc' }
