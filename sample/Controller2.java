package sample;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ResourceBundle;

import javafx.concurrent.Task;
import javafx.fxml.FXML;
import javafx.scene.layout.StackPane;
import javafx.scene.media.AudioClip;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

public class Controller2 {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private WebView web;

    @FXML
    private StackPane root;

    @FXML
    void initialize() throws MalformedURLException {

        AudioClip audio = new AudioClip(getClass().getResource("scena2.mp3").toExternalForm());
        {
            final Task task = new Task() {//Музыкальный цикл (!!!ОСОБЕННО НЕ ТРОГАТЬ!!!)

                @Override
                protected Object call() throws Exception {
                    int s = 100;
                    audio.setVolume(0.2f);
                    audio.setCycleCount(s);
                    audio.play();
                    return null;
                }
            };
            Thread thread = new Thread(task);
            thread.start();
        }


        assert root != null : "fx:id=\"root\" was not injected: check your FXML file 'sample2.2.fxml'.";
        WebEngine engine = web.getEngine();
        //File file =new File("src\\game\\index.html");
        File file = new File("src\\sample\\osnova.html");
        URL url = file.toURI().toURL();
        engine.load(url.toString());
        root.getChildren().add(web);
    }
}