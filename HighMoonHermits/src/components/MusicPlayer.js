import React from 'react'

export default function BandCamp ({onClickAway, playerType = 'BandCamp'}){
    const autoPlay = false;
    const color = '4b2c20'
    return(        
       
        
            <div onClick={onClickAway}>
                <iframe border='0'
                        width='500px'
                        height='1000px'
                        align='center' 
                        src="https://bandcamp.com/EmbeddedPlayer/album=796739166/size=large/bgcol=ffffff/linkcol=e99708/transparent=true/" seamless>
                    <a href="http://highmoonhermits1.bandcamp.com/album/live-and-not-live">
                        Live and Not Live by High Moon Hermits</a>
                </iframe>
                {/* <iframe 
                    width="100%"
                    height="100%"
                    scrolling="no"
                    allow="autoplay" 
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1020652654&auto_play=${autoPlay}&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false&color=${color}`}
                    />           */}
            </div>   
    )
}