module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'julia.css': 'julia.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'julia.css',
                dest: 'julia.css'
            }
        },
        haml: {
            dist: {
                files: {
                    'julia.html': 'julia.haml'
                }
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
            },
            haml: {
                files: ['**/*.haml'],
                tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-haml2html');

};