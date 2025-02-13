varying vec2 vUv;

void main()
{
    float border = step(0.46, max(abs(vUv.x - 0.5) - 0.01, abs(vUv.y - 0.5)));
    border = 1.0 - border;
    
    float strength = step(0.5, distance(vUv, vec2(0.5)) + 0.15);
    strength *= border;

    gl_FragColor = vec4(strength, strength, strength, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}