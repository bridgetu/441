$(document).ready(function() {
    
    var data = {
        artist: "",
        song: "",
        lyrics: "",

        setArtist: function(value) {
            data.artist = value;
            $('#lyrics-artist').val(value);
        },

        setSong: function(value) {
            data.song = value;
            $('#lyrics-song').val(value);
        },

        setLyrics: function(value) {
            data.lyrics = value;
        },

        populateLyrics: function() {
            $('#lyrics-output').html(data.lyrics);
        },

        clearInput: function() {
            data.setSong('');
            data.setArtist('');
            data.setLyrics('');
            data.populateLyrics();
        }
    }

    $('#lyrics-artist').change(function() {
        data.setArtist($(this).val());
    });

    $('#lyrics-song').change(function() {
        data.setSong($(this).val());
    });

    $('#submit-artist-song').on('click', function() {
        $.getJSON('https://api.lyrics.ovh/v1/'+data.artist+'/'+data.song, function(result) {
            data.setLyrics(result.lyrics.replace(/\n/g, "<br>"));
            data.populateLyrics();
        });
    });

    $('#clear-button').on('click', function() {
        data.clearInput();
    });

});