<template>
  <svg
    :height="img_height"
    :width="img_width"
    viewBox="0 0 158.75 158.75"
    version="1.1"
    id="svg8">
    <defs
      id="defs2" />
    <metadata
      id="metadata5">
      <rdf:RDF>
        <cc:Work
          rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title></dc:title>
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <g
      id="layer1"
      transform="translate(0,-138.24998)"
      style="display:inline">
      <g
        id="planning-circle-group"
        inkscape:label="#g2713">
        <path
          inkscape:label="#path2035"
          sodipodi:open="true"
          d="m 100.82432,161.43248 a 58.939209,58.939209 0 0 1 24.32661,18.65873"
          sodipodi:end="5.6297964"
          sodipodi:start="5.1035776"
          sodipodi:ry="58.939209"
          sodipodi:rx="58.939209"
          sodipodi:cy="215.91922"
          sodipodi:cx="78.351532"
          sodipodi:type="arc"
          id="planning-circle"
          class="dh-data-access-coe_project-lifecycle_image-planning-circle" />
        <path
          inkscape:label="#path2680"
          sodipodi:nodetypes="cccc"
          inkscape:connector-curvature="0"
          id="planning-arrow"
          d="m 127.7693,184.51913 0.83329,-5.79319 -6.40039,3.66763 z"
          class="dh-data-access-coe_project-lifecycle_image-planning-circle-arrow"/>
      </g>
      <g
        id="preaward-circle-group"
        inkscape:label="#g2717">
        <path
          inkscape:label="#path2046"
          class="dh-data-access-coe_project-lifecycle_image-preaward-circle"
          id="preaward-circle"
          sodipodi:type="arc"
          sodipodi:cx="78.351532"
          sodipodi:cy="215.91922"
          sodipodi:rx="58.939209"
          sodipodi:ry="58.939209"
          sodipodi:start="6.0376252"
          sodipodi:end="0.25314485"
          sodipodi:open="true"
          d="m 135.52264,201.59112 a 58.939209,58.939209 0 0 1 -0.11032,29.08941" />
        <path
          inkscape:label="#path2701"
          class="dh-data-access-coe_project-lifecycle_image-preaward-circle-arrow"
          d="m 134.21065,235.14701 4.66713,-3.53176 -7.12923,-1.89491 z"
          id="preaward-arrow"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccc" />
      </g>
      <g
        id="award-circle-group"
        inkscape:label="#g2721">
        <path
          inkscape:label="#path2048"
          d="M 124.10119,253.07833 A 58.939209,58.939209 0 0 1 83.04947,274.6709 58.939209,58.939209 0 0 1 39.088128,259.87619"
          sodipodi:open="true"
          sodipodi:end="2.2998549"
          sodipodi:start="0.68215206"
          sodipodi:ry="58.939209"
          sodipodi:rx="58.939209"
          sodipodi:cy="215.91922"
          sodipodi:cx="78.351532"
          sodipodi:type="arc"
          id="award-circle"
          class="dh-data-access-coe_project-lifecycle_image-award-circle" />
        <path
          inkscape:label="#path2703"
          sodipodi:nodetypes="cccc"
          inkscape:connector-curvature="0"
          id="award-arrow"
          d="m 36.43411,256.31432 -0.0275,5.85274 5.834291,-4.51416 z"
          class="dh-data-access-coe_project-lifecycle_image-award-circle-arrow" />
      </g>

      <g
        id="postaward-circle-group"
        inkscape:label="#g2725">
        <path
          inkscape:label="#path2050"
          class="dh-data-access-coe_project-lifecycle_image-postaward-circle"
          id="postaward-circle"
          sodipodi:type="arc"
          sodipodi:cx="78.351532"
          sodipodi:cy="215.91922"
          sodipodi:rx="58.939209"
          sodipodi:ry="58.939209"
          sodipodi:start="2.7344791"
          sodipodi:end="3.230126"
          sodipodi:open="true"
          d="M 24.229568,239.25682 A 58.939209,58.939209 0 0 1 19.643159,210.70795" />
        <path
          inkscape:label="#path2705"
          class="dh-data-access-coe_project-lifecycle_image-postaward-circle-arrow"
          d="m 19.95213,205.78744 -4.010756,4.26253 7.345726,0.67596 z"
          id="postaward-arrow"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccc" />
      </g>

      <g
        id="closeout-circle-group"
        inkscape:label="#g2709">
        <path
          inkscape:label="#path2052"
          d="M 26.422791,188.04026 A 58.939209,58.939209 0 0 1 47.10459,165.94464"
          sodipodi:open="true"
          sodipodi:end="4.1536051"
          sodipodi:start="3.634299"
          sodipodi:ry="58.939209"
          sodipodi:rx="58.939209"
          sodipodi:cy="215.91922"
          sodipodi:cx="78.351532"
          sodipodi:type="arc"
          id="closeout-circle"
          class="dh-data-access-coe_project-lifecycle_image-closeout-circle" />
        <path
          inkscape:label="#path2678"
          class="dh-data-access-coe_project-lifecycle_image-closeout-circle-arrow"
          d="m 51.420769,164.56627 -5.642428,-1.55513 2.833718,6.81077 z"
          id="closeout-arrow"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccc" />
      </g>

    </g>
    <g
      inkscape:groupmode="layer"
      id="layer2"
      inkscape:label="boxes"
      style="display:inline">
      <g
        id="planning-group"
        :class="['dh-data-access-coe_project-lifecycle_image-planning', img_active=='planning'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
        @click="this.ProjectLifecycleClick">
        <title
          id="planning-title">{{tooltip_planning}}</title>
        <rect
          inkscape:label="#rect1384"
          ry="2.6422932"
          y="14.78331"
          x="54.129658"
          height="16"
          width="48"
          id="planning-rect"/>
        <text
          inkscape:label="#text2015"
          id="planning-text"
          y="24.536058"
          x="62.181423"
          class="dh-data-access-coe_project-lifecycle_text-all"
          xml:space="preserve"><tspan
            y="24.536058"
            x="62.181423"
            id="planning-tspan"
            sodipodi:role="line">Planning</tspan></text>
      </g>
      <g
        id="award-group"
        :class="['dh-data-access-coe_project-lifecycle_image-award', img_active=='award'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
        @click="this.ProjectLifecycleClick">
        <title
          id="award-title">{{tooltip_award}}</title>
        <rect
          inkscape:label="#rect1408"
          ry="2.6422932"
          y="99.75"
          x="99.38932"
          height="16"
          width="48"
          id="award-rect"/>
        <text
          inkscape:label="#text2023"
          id="award-text"
          y="110.27925"
          x="112.21723"
          class="dh-data-access-coe_project-lifecycle_text-all"
          xml:space="preserve"><tspan
            y="110.27925"
            x="112.21723"
            id="award-tspan"
            sodipodi:role="line">Award</tspan></text>
      </g>
      <g
        id="postaward-group"
        :class="['dh-data-access-coe_project-lifecycle_image-postaward', img_active=='postaward'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
        @click="this.ProjectLifecycleClick">
        <title
          id="postaward-title">{{tooltip_postaward}}</title>
        <rect
          inkscape:label="#rect1410"
          id="postaward-rect"
          width="48"
          height="16"
          x="7.9602313"
          y="99.75"
          ry="2.6422932" />
        <text
          inkscape:label="#text2027"
          id="postaward-text"
          y="110.05183"
          x="11.235863"
          class="dh-data-access-coe_project-lifecycle_text-all"
          xml:space="preserve"><tspan
            y="110.05183"
            x="11.235863"
            id="postaward-tspan"
            sodipodi:role="line">Post-Award</tspan></text>
      </g>
      <g
        id="closeout-group"
        :class="['dh-data-access-coe_project-lifecycle_image-closeout', img_active=='closeout'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
        @click="this.ProjectLifecycleClick">
        <title
          id="closeout-title">{{tooltip_closeout}}</title>
        <rect
          inkscape:label="#rect1412"
          ry="2.6422932"
          y="48.75"
          x="1.8194721"
          height="16"
          width="48"
          id="closeout-rect"/>
        <text
          inkscape:label="#text2031"
          xml:space="preserve"
          class="dh-data-access-coe_project-lifecycle_text-all"
          x="10.098684"
          y="58.878826"
          id="closeout-text"><tspan
            sodipodi:role="line"
            id="closeout-tspan"
            x="10.098684"
            y="58.878826">Closeout</tspan></text>
      </g>
      <g
        id="preaward-group"
        :class="['dh-data-access-coe_project-lifecycle_image-preaward', img_active=='preaward'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
        @click="this.ProjectLifecycleClick">
        <title
          id="preaward-title">{{tooltip_preaward}}</title>
        <rect
          ry="2.6422932"
          y="48.75"
          x="107.577"
          height="16"
          width="48"
          id="preaward-rect"
          inkscape:label="#rect1406" />
        <text
          id="preaward-text"
          y="59.106258"
          x="112.67211"
          class="dh-data-access-coe_project-lifecycle_text-all"
          xml:space="preserve"
          inkscape:label="#text2019"><tspan
            y="59.106258"
            x="112.67211"
            id="preaward-tspan"
            sodipodi:role="line">Pre-Award</tspan></text>
      </g>
    </g>
  </svg>
</template>
<script>
import {
  COE_TOOLTIP_PLANNING,
  COE_TOOLTIP_PREAWARD,
  COE_TOOLTIP_AWARD,
  COE_TOOLTIP_POSTAWARD,
  COE_TOOLTIP_CLOSEOUT
} from '@/consts/constants.js';

export default {
  name: 'DOTProjectLifecycleImg',
  props: ['height', 'width', 'active'],
  data: function(){
    return {
      img_height: this.heigth,
      img_width: this.width,
      img_active: this.active,
      tooltip_planning: COE_TOOLTIP_PLANNING,
      tooltip_preaward: COE_TOOLTIP_PREAWARD,
      tooltip_award: COE_TOOLTIP_AWARD,
      tooltip_postaward: COE_TOOLTIP_POSTAWARD,
      tooltip_closeout: COE_TOOLTIP_CLOSEOUT,
    }
  },
  methods: {
    ProjectLifecycleClick: function(event) {
      let id = event.target.id;
      switch(id){
        case 'planning-group':
        case 'planning-rect':
        case 'planning-tspan': {
          this.$router.push({path: '/data-access-coe/community-support/planning'});
          break;
        }
        case 'preaward-group':
        case 'preaward-rect':
        case 'preaward-tspan': {
          this.$router.push({path: '/data-access-coe/community-support/preaward'});
          break;
        }
        case 'award-group':
        case 'award-rect':
        case 'award-tspan': {
          this.$router.push({path: '/data-access-coe/community-support/award'});
          break;
        }
        case 'postaward-group':
        case 'postaward-rect':
        case 'postaward-tspan': {
          this.$router.push({path: '/data-access-coe/community-support/postaward'});
          break;
        }
        case 'closeout-group':
        case 'closeout-rect':
        case 'closeout-tspan': {
          this.$router.push({path: '/data-access-coe/community-support/closeout'});
          break;
        }
        default: return;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .dh-listtype__upperalpha {
    list-style-type: upper-alpha;
    font-weight: bold;
  }
  a {
    word-wrap: break-word;
  }
</style>
