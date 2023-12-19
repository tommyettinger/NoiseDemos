package com.github.tommyettinger;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputAdapter;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.glutils.ImmediateModeRenderer20;
import com.badlogic.gdx.utils.ScreenUtils;
import com.badlogic.gdx.utils.TimeUtils;
import com.badlogic.gdx.utils.viewport.ScreenViewport;
import com.badlogic.gdx.utils.viewport.Viewport;
import com.github.tommyettinger.digital.BitConversion;
import com.github.tommyettinger.digital.TrigTools;

import static com.badlogic.gdx.Input.Keys.ESCAPE;
import static com.badlogic.gdx.graphics.GL20.GL_POINTS;

/** {@link com.badlogic.gdx.ApplicationListener} implementation shared by all platforms. */
public class TrigToolsCosSmooth extends ApplicationAdapter {
    private ImmediateModeRenderer20 renderer;

    public static final int width = 1920, height = 1080;

    private Viewport view;
    private long startTime;

    public TrigToolsCosSmooth() {
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
        float ctr = TimeUtils.timeSinceMillis(startTime) * 0x1p-5f;
        for (int x = 0; x < width; x++) {
            float c = x - ctr;
            for (int y = 0; y < height; y++, c += 0x1p-9f) {
                renderer.color(BitConversion.intBitsToFloat((BitConversion.floatToIntBits(TrigTools.cosSmooth(c)) & 0x00FFFFFF) | 0xFE000000));
                renderer.vertex(x, y, 0);
            }
        }
        renderer.end();
    }

    @Override
    public void render() {
        Gdx.graphics.setTitle("TrigTools.cosSmooth() at " + Gdx.graphics.getFramesPerSecond() + " FPS");
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