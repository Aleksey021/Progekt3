package sample;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ResourceBundle;

import javafx.animation.*;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.concurrent.Task;
import javafx.concurrent.Worker;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.geometry.VPos;
import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;
import javafx.scene.layout.VBox;
import javafx.scene.media.AudioClip;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.paint.Color;
import javafx.scene.web.PopupFeatures;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.util.Callback;
import javafx.util.Duration;
import netscape.javascript.JSObject;

import javax.swing.*;


public class Controller {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private ImageView startgame;

    @FXML
    private Button knopkaexit;

    @FXML
    private Button startgameK;

    @FXML
    void initialize() {
        {//НЕ ТРОГАТЬ!!!!!
            Node rectParallel = null;
            FadeTransition fadeTransition =
                    new FadeTransition(Duration.millis(3000), rectParallel);
            fadeTransition.setFromValue(1.0f);
            fadeTransition.setToValue(0.3f);
            fadeTransition.setCycleCount(2);
            fadeTransition.setAutoReverse(true);
            TranslateTransition translateTransition =
                    new TranslateTransition(Duration.millis(2000), rectParallel);
            translateTransition.setFromX(50);
            translateTransition.setToX(350);
            translateTransition.setCycleCount(2);
            translateTransition.setAutoReverse(true);
            RotateTransition rotateTransition =
                    new RotateTransition(Duration.millis(12000), startgame);
            rotateTransition.setByAngle(300f);
            rotateTransition.setCycleCount(100);
            rotateTransition.setAutoReverse(true);
            ScaleTransition scaleTransition =
                    new ScaleTransition(Duration.millis(10000), startgame);
            scaleTransition.setToX(1.2f);
            scaleTransition.setToY(1.2f);
            scaleTransition.setCycleCount(100);
            scaleTransition.setAutoReverse(true);

            ParallelTransition parallelTransition = new ParallelTransition();
            parallelTransition.getChildren().addAll(
                    rotateTransition,
                    scaleTransition
            );
            parallelTransition.setCycleCount(Timeline.INDEFINITE);
            parallelTransition.play();

        }
        AudioClip audio = new AudioClip(getClass().getResource("scena1.mp3").toExternalForm());
        {
            final Task task = new Task() {//Музыкальный цикл (!!!ОСОБЕННО НЕ ТРОГАТЬ!!!)

                @Override
                protected Object call() throws Exception {
                    int s = 100;
                    audio.setVolume(0.5f);
                    audio.setCycleCount(s);
                    audio.play();
                    return null;
                }
            };
            Thread thread = new Thread(task);
            thread.start();

            // String file = "src/sample/scena1.mp3";
            //Media sound = new Media(new File(file).toURI().toString());
            //MediaPlayer mediaPlayer = new MediaPlayer(sound);
            //mediaPlayer.play();


        }


       /* startgameK.setOnAction(event -> {
         Test test = new Test();
         test.start();
            startgame.getScene().getWindow().hide();    //Закрывает окно
        });*/



        startgameK.setOnAction(event -> {
            startgame.getScene().getWindow().hide();    //Закрывает окно
            FXMLLoader loader = new FXMLLoader();
            loader.setLocation(getClass().getResource("/sample/sample2.2.fxml"));

            try {
                loader.load();
            } catch (IOException e) {
                e.printStackTrace();
            }
            audio.stop();

            Parent root = loader.getRoot();
            Stage stage = new Stage();
            stage.setScene(new Scene(root));
            stage.showAndWait();
        });
        knopkaexit.setOnAction(event -> Platform.exit());
    }

}
