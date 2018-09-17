<?php
  $age = 17;
  $restricted = ( $age < 18 ) ? 'yes':(($age===18) ? 'notsure': 'no') ;
  echo $restricted;
?>