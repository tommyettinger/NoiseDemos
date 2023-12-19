package com.github.tommyettinger;

import com.badlogic.gdx.Application;
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputAdapter;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Pixmap;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.graphics.glutils.ShaderProgram;
import com.badlogic.gdx.math.MathUtils;
import com.badlogic.gdx.scenes.scene2d.utils.UIUtils;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.Clipboard;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.TimeUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.anim8.AnimatedGif;
import com.github.tommyettinger.anim8.Dithered;
import com.github.tommyettinger.anim8.QualityPalette;
import com.github.tommyettinger.digital.Base;
import com.github.tommyettinger.digital.MathTools;
import com.github.tommyettinger.digital.TrigTools;

import static com.badlogic.gdx.Input.Keys.*;
import static com.badlogic.gdx.graphics.GL20.GL_POINTS;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class Main extends ApplicationAdapter {
    private ImmediateModeRenderer20 renderer;

    public static final int width = 1920, height = 1080;

    private Viewport view;
    private long startTime;

    public Main() {
    }

    @Override
    public void create() {
        startTime = TimeUtils.millis();
        renderer = new ImmediateModeRenderer20(width * height + 2, false, true, 0);

        view = new ScreenViewport();
        InputAdapter input = new InputAdapter() {
            @Override
            public boolean keyUp(int keycode) {
                if (keycode == ESCAPE) {
                    Gdx.app.exit();
                }
                return true;
            }
        };
        Gdx.input.setInputProcessor(input);
        Gdx.gl.glDisable(GL20.GL_BLEND);
    }

    public void putMap() {
        renderer.begin(view.getCamera().combined, GL_POINTS);
        float c = TimeUtils.timeSinceMillis(startTime) * 0x1p-5f;

        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++, c += 0x1p-8f) {

                float bright = MathTools.fract((float) Math.sin(c));

                renderer.color(bright, bright, bright, 1f);
                renderer.vertex(x, y, 0);
            }
        }
        renderer.end();
    }

    @Override
    public void render() {
        Gdx.graphics.setTitle(Gdx.graphics.getFramesPerSecond() + " FPS");
        ScreenUtils.clear(0f, 0f, 0f, 1f);
        putMap();
    }

    @Override
    public void resize(int width, int height) {
        super.resize(width, height);
        view.update(width, height, true);
        view.apply(true);
    }
}