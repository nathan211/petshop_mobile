package com.petshop;

import android.os.Bundle; 
import com.facebook.react.ReactActivity;

// Splash Screens
import org.devio.rn.splashscreen.SplashScreen; // Import this.


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);
      super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "petshop";
  }
}
