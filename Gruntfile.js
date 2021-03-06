module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/chuckcss.min.css": "chuckcss/front.less",
          "dist/bootstrap-override.min.css": "chuckcss/bootstrap/bootstrap-override.less",
          "dist/print.css": "chuckcss/print.less"
        }
      },
      development: {
        files: {
          "dist/bootstrap-override.css": "chuckcss/bootstrap/bootstrap-override.less",
          "dist/chuckcss.css": "chuckcss/front.less",
          "dist/print.css": "chuckcss/print.less"
        }
      }
    },
    autoprefixer: {
        dist: {
            files: {
                'dist/chuckcss.css': 'dist/chuckcss.css',
                'dist/chuckcss.min.css': 'dist/chuckcss.min.css',
                "dist/print.css" : "dist/print.css",
                "dist/bootstrap-override.min.css" : "dist/bootstrap-override.min.css",
                "dist/bootstrap-override.css" : "dist/bootstrap-override.css",
            }
        },
        options: {
          browsers: ['> 1%','last 2 versions','Safari >= 8']
        }
    },
    watch: {
      styles: {
        files: ['chuckcss/*.less','chuckcss/**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch']);



};
