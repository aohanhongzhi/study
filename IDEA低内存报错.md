IDEA运行的时候低内存报错分析结果。下面这个报告是IDEA自己分析出来的，还不清楚是啥意思。

```
==================== HISTOGRAM ====================
Histogram. Top 50 by instance count [All-objects] [Only-strong-ref]:
    1: [2.02M/ 190MB] [1.72M/ 164MB] byte[]
    2: [1.99M/41.8MB] [1.69M/35.6MB] java.lang.String
    3: [ 564K/20.3MB] [ 496K/17.8MB] java.util.HashMap$Node
    4: [ 489K/19.5MB] [ 489K/19.5MB] com.intellij.util.zip.ImmutableZipEntry
    5: [ 360K/45.3MB] [ 347K/43.2MB] java.lang.Object[]
    6: [ 215K/7.77MB] [ 207K/7.46MB] java.util.concurrent.ConcurrentHashMap$Node
    7: [ 174K/4.19MB] [ 166K/3.98MB] java.util.ArrayList
    8: [ 159K/ 833MB] [ 155K/ 832MB] int[]
    9: [ 152K/ 5.5MB] [ 152K/ 5.5MB] java.util.Hashtable$Entry
   10: [ 148K/7.73MB] [ 122K/6.37MB] java.util.LinkedHashMap$Entry
   11: [ 122K/1.47MB] [ 117K/1.41MB] java.lang.Integer
   12: [ 111K/2.66MB] [98.8K/2.37MB] com.intellij.util.SmartList
   13: [ 105K/13.0MB] [ 105K/13.0MB] java.lang.Class
   14: [94.1K/ 752KB] [92.6K/ 741KB] java.lang.Object
   15: [64.4K/17.9MB] [55.0K/15.7MB] java.util.HashMap$Node[]
   16: [63.6K/3.12MB] [63.6K/3.12MB] org.jdom.Attribute
   17: [60.0K/2.64MB] [60.0K/2.64MB] com.intellij.util.containers.IntObjectLRUMap$MapEntry
   18: [58.7K/3.05MB] [58.7K/3.05MB] net.sourceforge.pmd.lang.java.ast.Token
   19: [50.0K/ 1.2MB] [50.0K/ 1.2MB] R$a
   20: [48.6K/4.13MB] [43.2K/3.89MB] long[]
   21: [48.5K/ 777KB] [48.5K/ 776KB] java.lang.Long
   22: [44.8K/1.25MB] [44.8K/1.25MB] com.intellij.util.text.ImmutableText$CompositeNode
   23: [44.4K/2.13MB] [34.7K/1.66MB] com.intellij.reference.SoftReference
   24: [42.8K/1.75MB] [    0/    0B] com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
   25: [42.5K/2.38MB] [39.6K/2.21MB] java.util.HashMap
   26: [41.9K/1.67MB] [41.3K/1.65MB] java.lang.ref.WeakReference
   27: [41.2K/1.65MB] [41.2K/1.65MB] org.jdom.ContentList
   28: [41.2K/2.64MB] [41.2K/2.64MB] org.jdom.Element
   29: [39.9K/1.31MB] [39.9K/1.31MB] com.intellij.openapi.vfs.newvfs.impl.VfsData$DirectoryData
   30: [39.0K/1.03MB] [29.3K/ 879KB] java.lang.Class[]
   31: [36.9K/1.77MB] [7.95K/ 381KB] java.lang.ref.SoftReference
   32: [35.1K/1.82MB] [32.1K/1.48MB] java.lang.String[]
   33: [35.1K/5.69MB] [35.1K/5.69MB] com.jetbrains.jdi.ClassTypeImpl
   34: [34.8K/2.26MB] [34.8K/2.26MB] com.intellij.openapi.extensions.impl.XmlExtensionAdapter$SimpleConstructorInjectionAdapter
   35: [34.1K/ 545KB] [34.1K/ 545KB] javax.swing.event.EventListenerList
   36: [33.9K/2.47MB] [26.7K/1.94MB] java.util.LinkedHashMap
   37: [31.8K/1.05MB] [27.8K/ 917KB] com.intellij.psi.impl.PsiCachedValueImpl
   38: [31.4K/ 754KB] [31.4K/ 754KB] jdk.internal.jimage.ImageLocation!1
   39: [31.4K/1.16MB] [31.4K/1.16MB] jdk.internal.jimage.ImageReader$Resource
   40: [31.1K/ 995KB] [31.1K/ 995KB] org.jdom.AttributeList
   41: [30.9K/1.85MB] [16.6K/ 1.0MB] com.intellij.psi.impl.source.tree.java.PsiJavaTokenImpl
   42: [30.1K/1.47MB] [30.1K/1.47MB] org.jdom.Attribute[]
   43: [29.3K/ 469KB] [29.2K/ 468KB] com.intellij.util.containers.LockFreeCopyOnWriteArrayList
   44: [28.4K/ 683KB] [28.4K/ 683KB] java.awt.Rectangle
   45: [27.1K/ 326KB] [27.1K/ 325KB] java.util.concurrent.atomic.AtomicBoolean
   46: [26.2K/1.36MB] [26.0K/1.35MB] java.lang.invoke.MemberName
   47: [26.1K/1.56MB] [14.4K/ 868KB] com.intellij.psi.impl.source.tree.PsiWhiteSpaceImpl
   48: [25.6K/ 847KB] [25.6K/ 847KB] com.intellij.codeInspection.ex.ToolsImpl
   49: [25.6K/1.25MB] [25.6K/1.25MB] com.intellij.codeInspection.ex.ScopeToolState
   50: [25.1K/ 804KB] [25.1K/ 804KB] com.intellij.codeInspection.ex.LocalInspectionToolWrapper
[...removed 47312 lines...]
Total -        All: 11.4M 1.47GB 47362 classes (Total instances: 11492409)
Total - Strong-ref: 10.1M 1.39GB 46241 classes (Total instances: 10123856)

Top 10 by size:
    1: [ 159K/ 833MB] [ 155K/ 832MB] int[]
    2: [2.02M/ 190MB] [1.72M/ 164MB] byte[]
    3: [ 360K/45.3MB] [ 347K/43.2MB] java.lang.Object[]
    4: [1.99M/41.8MB] [1.69M/35.6MB] java.lang.String
    5: [ 564K/20.3MB] [ 496K/17.8MB] java.util.HashMap$Node
    6: [ 489K/19.5MB] [ 489K/19.5MB] com.intellij.util.zip.ImmutableZipEntry
    7: [64.4K/17.9MB] [55.0K/15.7MB] java.util.HashMap$Node[]
    8: [ 105K/13.0MB] [ 105K/13.0MB] java.lang.Class
    9: [1.92K/11.7MB] [1.92K/11.7MB] com.intellij.util.zip.ImmutableZipEntry[]
   10: [6.94K/10.7MB] [5.08K/ 9.3MB] char[]
Unreachable objects:  404K  19.7MB
======== INSTANCES OF EACH NOMINATED CLASS ========
Nominated classes:
 --> [159K/833MB] int[]
 --> [2.02M/190MB] byte[]
 --> [360K/45.3MB] java.lang.Object[]
 --> [1.99M/41.8MB] java.lang.String
 --> [564K/20.3MB] java.util.HashMap$Node
 --> [489K/19.5MB] com.intellij.util.zip.ImmutableZipEntry
 --> [35.1K/5.69MB] com.jetbrains.jdi.ClassTypeImpl
 --> [63.6K/3.12MB] org.jdom.Attribute
 --> [58.7K/3.05MB] net.sourceforge.pmd.lang.java.ast.Token
 --> [41.2K/2.64MB] org.jdom.Element
 --> [7.56K/2.36MB] sun.java2d.SunGraphics2D
 --> [44.4K/2.13MB] com.intellij.reference.SoftReference
 --> [42.8K/1.75MB] com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
 --> [50.0K/1.2MB] R$a
 --> [1.09K/78.0KB] java.nio.DirectByteBuffer

CLASS: int[] (157416 objects)
Ignored 318 too-deep objects
Root 1:
[19.7K/ 12%/ 495MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[19.7K/ 12%/ 495MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[19.7K/ 12%/ 495MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[19.7K/ 12%/ 495MB]  619MB          1   java.lang.Object[]
[14.8K/  9%/ 494MB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[14.8K/  9%/ 494MB]  566MB          9   com.intellij.openapi.util.Ref
[14.8K/  9%/ 494MB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[14.8K/  9%/ 494MB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[  351/  0%/ 490MB]  496MB          7   com.intellij.openapi.wm.impl.ToolWindowsPane
[  289/  0%/ 490MB]  490MB          6   com.intellij.ui.components.JBPanel
[  225/  0%/ 490MB]  490MB          6   com.intellij.openapi.wm.impl.IdeRootPane$1
[  225/  0%/ 490MB]  490MB          6   com.intellij.openapi.wm.impl.IdeRootPane
[  225/  0%/ 490MB]  490MB          6   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[  225/  0%/ 490MB]  490MB          6   java.util.HashMap
[  225/  0%/ 490MB]  490MB          6   java.util.HashMap$Node[]
[  225/  0%/ 490MB]  490MB          6   java.util.HashMap$Node
[  225/  0%/ 490MB]  490MB          6   com.intellij.openapi.wm.impl.PaintersHelper
[  225/  0%/ 490MB]  490MB          6   java.util.LinkedHashMap
[  225/  0%/ 490MB]  490MB          6   java.util.LinkedHashMap$Entry
[  225/  0%/ 490MB]  490MB          6   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[  114/  0%/ 291MB]  291MB          6   +-java.util.HashMap
[  114/  0%/ 291MB]  291MB          6   | java.util.HashMap$Node[]
[  114/  0%/ 291MB]  291MB         10   | java.util.HashMap$Node
[  114/  0%/ 291MB]  291MB         10   | com.intellij.openapi.wm.impl.PaintersHelper$Cached
[  114/  0%/ 291MB]  291MB         10   | sun.awt.image.SunVolatileImage
[  108/  0%/ 283MB]  283MB          9   | sun.java2d.opengl.CGLVolatileSurfaceManager
[   81/  0%/ 283MB]  283MB          9   | sun.awt.image.BufImgSurfaceData
[   54/  0%/ 283MB]  283MB          9   | java.awt.image.BufferedImage
[   54/  0%/ 283MB]  283MB          9   | sun.awt.image.IntegerInterleavedRaster
[   18/  0%/ 283MB]  283MB         18 * | int[]
[  111/  0%/ 199MB]  199MB          6   \-com.intellij.util.JBHiDPIScaledImage
[   75/  0%/ 199MB]  199MB          6     java.awt.image.BufferedImage
[   36/  0%/ 199MB]  199MB          6     sun.awt.image.IntegerInterleavedRaster
[   12/  0%/ 199MB]  199MB         12 *   int[]
Root 2:
[   56/  0%/97.6MB] 97.8MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.CompletionHints.preInsertionHintComponent
[   56/  0%/97.6MB] 97.8MB          1   com.codota.intellij.lean.assistant.completion.local.CodotaHintLabel
[   56/  0%/97.6MB] 97.8MB          1   com.intellij.ui.components.panels.Wrapper
[   56/  0%/97.6MB] 97.8MB          1   javax.swing.JPanel
[   56/  0%/97.6MB] 97.8MB          1   com.intellij.ui.BalloonImpl$MyComponent
[   44/  0%/96.6MB] 96.7MB          1 ! com.intellij.ui.BalloonImpl (disposed)
[   44/  0%/96.6MB] 96.7MB          1   com.intellij.ui.components.JBLayeredPane
[   44/  0%/96.6MB] 96.7MB          1   com.intellij.openapi.wm.impl.IdeRootPane
[   42/  0%/96.6MB] 96.6MB          1   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   42/  0%/96.6MB] 96.6MB          1   java.util.HashMap
[   42/  0%/96.6MB] 96.6MB          1   java.util.HashMap$Node[]
[   42/  0%/96.6MB] 96.6MB          1   java.util.HashMap$Node
[   42/  0%/96.6MB] 96.6MB          1   com.intellij.openapi.wm.impl.PaintersHelper
[   42/  0%/96.6MB] 96.6MB          1   java.util.LinkedHashMap
[   42/  0%/96.6MB] 96.6MB          1   java.util.LinkedHashMap$Entry
[   42/  0%/96.6MB] 96.6MB          1   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   24/  0%/63.4MB] 63.4MB          1   +-java.util.HashMap
[   24/  0%/63.4MB] 63.4MB          1   | java.util.HashMap$Node[]
[   24/  0%/63.4MB] 63.4MB          2   | java.util.HashMap$Node
[   24/  0%/63.4MB] 63.4MB          2   | com.intellij.openapi.wm.impl.PaintersHelper$Cached
[   24/  0%/63.4MB] 63.4MB          2   | sun.awt.image.SunVolatileImage
[   24/  0%/63.4MB] 63.4MB          2   | sun.java2d.opengl.CGLVolatileSurfaceManager
[   18/  0%/63.4MB] 63.4MB          2   | sun.awt.image.BufImgSurfaceData
[   12/  0%/63.4MB] 63.4MB          2   | java.awt.image.BufferedImage
[   12/  0%/63.4MB] 63.4MB          2   | sun.awt.image.IntegerInterleavedRaster
[    4/  0%/63.4MB] 63.4MB          4 * | int[]
[   18/  0%/33.1MB] 33.1MB          1   \-com.intellij.util.JBHiDPIScaledImage
[   12/  0%/33.1MB] 33.1MB          1     java.awt.image.BufferedImage
[    6/  0%/33.1MB] 33.1MB          1     sun.awt.image.IntegerInterleavedRaster
[    2/  0%/33.1MB] 33.1MB          2 *   int[]
Root 3:
[1.01K/  0%/73.4MB] 83.4MB          1   ROOT: Static field: com.intellij.ui.mac.touchbar.TouchBarsManager.ourStack
[1.01K/  0%/73.4MB] 83.4MB          1   com.intellij.ui.mac.touchbar.StackTouchBars
[1.01K/  0%/73.4MB] 83.4MB          1   java.util.ArrayDeque
[1.01K/  0%/73.4MB] 83.4MB          1   java.lang.Object[]
[1.01K/  0%/73.4MB] 83.4MB          1   com.intellij.ui.mac.touchbar.BarContainer
[1.01K/  0%/73.4MB] 83.4MB          1   com.intellij.find.SearchReplaceComponent
[   41/  0%/73.3MB] 73.3MB          1   com.intellij.ui.OnePixelSplitter
[   39/  0%/73.3MB] 73.3MB          1   com.intellij.openapi.ui.OnePixelDivider
[   39/  0%/73.3MB] 73.3MB          1   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   39/  0%/73.3MB] 73.3MB          1   java.util.HashMap
[   39/  0%/73.3MB] 73.3MB          1   java.util.HashMap$Node[]
[   39/  0%/73.3MB] 73.3MB          1   java.util.HashMap$Node
[   39/  0%/73.3MB] 73.3MB          1   com.intellij.openapi.wm.impl.PaintersHelper
[   39/  0%/73.3MB] 73.3MB          1   java.util.LinkedHashMap
[   39/  0%/73.3MB] 73.3MB          1   java.util.LinkedHashMap$Entry
[   39/  0%/73.3MB] 73.3MB          1   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   18/  0%/40.1MB] 40.1MB          1   +-java.util.HashMap
[   18/  0%/40.1MB] 40.1MB          1   | java.util.HashMap$Node[]
[   18/  0%/40.1MB] 40.1MB          2   | java.util.HashMap$Node
[   18/  0%/40.1MB] 40.1MB          2   | com.intellij.openapi.wm.impl.PaintersHelper$Cached
[   18/  0%/40.1MB] 40.1MB          2   | sun.awt.image.SunVolatileImage
[   12/  0%/32.1MB] 32.1MB          1   | sun.java2d.opengl.CGLVolatileSurfaceManager
[    9/  0%/32.1MB] 32.1MB          1   | sun.awt.image.BufImgSurfaceData
[    6/  0%/32.1MB] 32.1MB          1   | java.awt.image.BufferedImage
[    6/  0%/32.1MB] 32.1MB          1   | sun.awt.image.IntegerInterleavedRaster
[    2/  0%/32.1MB] 32.1MB          2 * | int[]
[   21/  0%/33.1MB] 33.1MB          1   \-com.intellij.util.JBHiDPIScaledImage
[   15/  0%/33.1MB] 33.1MB          1     java.awt.image.BufferedImage
[    6/  0%/33.1MB] 33.1MB          1     sun.awt.image.IntegerInterleavedRaster
[    2/  0%/33.1MB] 33.1MB          2 *   int[]
Root 4:
[  978/  0%/72.5MB] 78.5MB          1   ROOT: Static field: java.awt.KeyboardFocusManager.newFocusOwner
[  978/  0%/72.5MB] 78.5MB          1   com.intellij.execution.testframework.sm.runner.ui.SMTRunnerTestTreeView
[  938/  0%/72.5MB] 78.4MB          1 ! com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm (disposed)
[   38/  0%/72.3MB] 72.4MB          1   com.intellij.ui.OnePixelSplitter
[   38/  0%/72.3MB] 72.4MB          1   com.intellij.openapi.ui.OnePixelDivider
[   38/  0%/72.3MB] 72.4MB          1   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   36/  0%/72.3MB] 72.3MB          1   java.util.HashMap
[   36/  0%/72.3MB] 72.3MB          1   java.util.HashMap$Node[]
[   36/  0%/72.3MB] 72.3MB          1   java.util.HashMap$Node
[   36/  0%/72.3MB] 72.3MB          1   com.intellij.openapi.wm.impl.PaintersHelper
[   36/  0%/72.3MB] 72.3MB          1   java.util.LinkedHashMap
[   36/  0%/72.3MB] 72.3MB          1   java.util.LinkedHashMap$Entry
[   36/  0%/72.3MB] 72.3MB          1   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   18/  0%/39.1MB] 39.1MB          1   +-java.util.HashMap
[   18/  0%/39.1MB] 39.1MB          1   | java.util.HashMap$Node[]
[   18/  0%/39.1MB] 39.1MB          2   | java.util.HashMap$Node
[   18/  0%/39.1MB] 39.1MB          2   | com.intellij.openapi.wm.impl.PaintersHelper$Cached
[   18/  0%/39.1MB] 39.1MB          2   | sun.awt.image.SunVolatileImage
[   12/  0%/31.3MB] 31.3MB          1   | sun.java2d.opengl.CGLVolatileSurfaceManager
[    9/  0%/31.3MB] 31.3MB          1   | sun.awt.image.BufImgSurfaceData
[    6/  0%/31.3MB] 31.3MB          1   | java.awt.image.BufferedImage
[    6/  0%/31.3MB] 31.3MB          1   | sun.awt.image.IntegerInterleavedRaster
[    2/  0%/31.3MB] 31.3MB          2 * | int[]
[   18/  0%/33.1MB] 33.1MB          1   \-com.intellij.util.JBHiDPIScaledImage
[   12/  0%/33.1MB] 33.1MB          1     java.awt.image.BufferedImage
[    6/  0%/33.1MB] 33.1MB          1     sun.awt.image.IntegerInterleavedRaster
[    2/  0%/33.1MB] 33.1MB          2 *   int[]
Root 5:
[4.41K/  2%/33.5MB] 38.5MB          1   ROOT: Global JNI
[4.41K/  2%/33.5MB] 38.5MB          1   com.intellij.openapi.wm.impl.IdeFrameImpl
[1.69K/  1%/33.2MB] 35.0MB          1   com.intellij.openapi.wm.impl.IdeRootPane
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap$Node[]
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap$Node
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.PaintersHelper
[   21/  0%/33.1MB] 33.1MB          1   java.util.LinkedHashMap
[   21/  0%/33.1MB] 33.1MB          1   java.util.LinkedHashMap$Entry
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   18/  0%/33.1MB] 33.1MB          1   com.intellij.util.JBHiDPIScaledImage
[   12/  0%/33.1MB] 33.1MB          1   java.awt.image.BufferedImage
[    6/  0%/33.1MB] 33.1MB          1   sun.awt.image.IntegerInterleavedRaster
[    2/  0%/33.1MB] 33.1MB          2 * int[]
Root 6:
[  108/  0%/33.1MB] 33.4MB          1   ROOT: Static field: java.awt.KeyboardFocusManager.currentFocusCycleRoot
[  108/  0%/33.1MB] 33.4MB          1   com.intellij.openapi.fileEditor.impl.EditorWindow$TComp
[  105/  0%/33.1MB] 33.4MB          1   com.intellij.openapi.fileEditor.impl.EditorTabbedContainer$EditorTabs
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap$Node[]
[   21/  0%/33.1MB] 33.1MB          1   java.util.HashMap$Node
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.PaintersHelper
[   21/  0%/33.1MB] 33.1MB          1   java.util.LinkedHashMap
[   21/  0%/33.1MB] 33.1MB          1   java.util.LinkedHashMap$Entry
[   21/  0%/33.1MB] 33.1MB          1   com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   18/  0%/33.1MB] 33.1MB          1   com.intellij.util.JBHiDPIScaledImage
[   12/  0%/33.1MB] 33.1MB          1   java.awt.image.BufferedImage
[    6/  0%/33.1MB] 33.1MB          1   sun.awt.image.IntegerInterleavedRaster
[    2/  0%/33.1MB] 33.1MB          2 * int[]
Root 7:
[41.5K/ 26%/7.22MB] 24.6MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.ManagingFS$ManagingFSHolder.ourInstance
[41.5K/ 26%/7.22MB] 24.6MB          1   com.intellij.openapi.vfs.newvfs.persistent.PersistentFSImpl
[40.2K/ 25%/7.19MB] 14.1MB          1   com.intellij.openapi.vfs.newvfs.impl.VfsData
[40.2K/ 25%/7.06MB] 14.0MB          1   com.intellij.concurrency.ConcurrentIntObjectHashMap
[40.2K/ 25%/7.06MB] 14.0MB          1   com.intellij.concurrency.ConcurrentIntObjectHashMap$Node[]
[40.2K/ 25%/7.06MB] 13.9MB       1132   com.intellij.concurrency.ConcurrentIntObjectHashMap$Node
[40.2K/ 25%/7.06MB] 13.9MB       1132   com.intellij.openapi.vfs.newvfs.impl.VfsData$Segment
[1.13K/  0%/4.65MB] 4.66MB       1132   +-java.util.concurrent.atomic.AtomicIntegerArray
[1.13K/  0%/4.65MB] 4.65MB       1132 * | int[]
[39.1K/ 24%/2.41MB] 9.05MB       1089   \-java.util.concurrent.atomic.AtomicReferenceArray
[39.1K/ 24%/2.41MB] 9.04MB       1089     java.lang.Object[]
[38.8K/ 24%/2.39MB] 4.41MB      37258     com.intellij.openapi.vfs.newvfs.impl.VfsData$DirectoryData
[37.2K/ 23%/2.33MB] 2.33MB      37220 *   int[]
Root 8:
[20.0K/ 12%/ 400KB] 13.4MB          1   ROOT: Static field: com.intellij.codeInsight.documentation.render.DocRenderer.MEMORY_MANAGER
[20.0K/ 12%/ 400KB] 13.4MB          1   com.intellij.codeInsight.documentation.render.DocRendererMemoryManager
[20.0K/ 12%/ 400KB] 13.4MB          2   java.util.LinkedHashMap
[19.0K/ 12%/ 381KB] 12.8MB          1   java.util.HashMap$Node[]
[19.0K/ 12%/ 381KB] 12.8MB        120   java.util.LinkedHashMap$Entry
[13.1K/  8%/ 264KB]  8.7MB        120   com.intellij.codeInsight.documentation.render.DocRenderer
[12.6K/  8%/ 257KB] 8.41MB        120   com.intellij.codeInsight.documentation.render.DocRenderer$EditorPane
[12.2K/  7%/ 246KB] 1.93MB        120   com.intellij.ide.ui.laf.darcula.ui.DarculaEditorPaneUI
[12.2K/  7%/ 246KB] 1.92MB        120   javax.swing.plaf.basic.BasicTextUI$RootView
[12.2K/  7%/ 246KB] 1.92MB        120   javax.swing.text.html.BlockView
[11.8K/  7%/ 237KB] 1.84MB        120   javax.swing.text.View[]
[11.3K/  7%/ 231KB] 1.78MB        120   javax.swing.text.html.HTMLEditorKit$HTMLFactory$BodyBlockView
[10.8K/  6%/ 221KB] 1.72MB        120   javax.swing.text.View[]
[7.16K/  4%/ 131KB] 1.13MB        120   javax.swing.text.html.TableView
[6.32K/  4%/ 116KB] 1.02MB        120   javax.swing.text.View[]
[ 6.0K/  3%/ 111KB]  980KB        174   javax.swing.text.html.TableView$RowView
[5.31K/  3%/97.5KB]  882KB        174   javax.swing.text.View[]
[5.31K/  3%/97.5KB]  877KB        348   javax.swing.text.html.TableView$CellView
[3.91K/  2%/74.6KB]  607KB        348   javax.swing.text.View[]
[3.91K/  2%/74.6KB]  597KB        387   javax.swing.text.html.ParagraphView
[1.66K/  1%/34.4KB]  166KB        387   javax.swing.text.View[]
[1.66K/  1%/34.4KB]  154KB        415   javax.swing.text.ParagraphView$Row
[1.66K/  1%/34.4KB] 34.4KB       1660 * int[]
Root 9:
[    1/  0%/   12B]    12B          1   ROOT: Static field: com.intellij.lang.javascript.buildTools.gulp.GulpfileStructure.<init_lock>
[    1/  0%/   12B]    12B          1 * int[]
Root 10:
[    1/  0%/   12B]    12B          1   ROOT: Static field: com.intellij.psi.css.descriptor.CssNavigableDescriptor.<init_lock>
[    1/  0%/   12B]    12B          1 * int[]
Report for int[] created in 1.122 s

CLASS: byte[] (1905958 objects)
Ignored 7791 too-deep objects
Root 1:
[ 206K/ 10%/21.2MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[ 206K/ 10%/21.2MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[ 206K/ 10%/21.2MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[ 206K/ 10%/21.2MB]  619MB          1   java.lang.Object[]
[ 128K/  6%/8.24MB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[ 128K/  6%/8.24MB]  566MB          9   com.intellij.openapi.util.Ref
[ 128K/  6%/8.24MB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[ 128K/  6%/8.24MB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[ 118K/  6%/7.69MB] 48.5MB          5 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[61.0K/  3%/4.41MB] 26.9MB          5   | +-com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[61.0K/  3%/4.41MB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap
[61.0K/  3%/4.41MB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[61.0K/  3%/4.41MB] 26.4MB         67   | | java.util.concurrent.ConcurrentHashMap$Node
[61.0K/  3%/4.41MB] 26.3MB         62   | | com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[60.4K/  3%/4.39MB] 25.7MB          1   | | com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[60.4K/  3%/4.39MB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[60.4K/  3%/4.39MB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[60.4K/  3%/4.39MB] 25.7MB          1   | | java.util.HashMap
[60.4K/  3%/4.39MB] 25.7MB          1   | | java.util.HashMap$Node[]
[60.4K/  3%/4.39MB] 25.7MB          7   | | java.util.HashMap$Node
[59.6K/  3%/4.33MB] 24.4MB          5   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[59.6K/  3%/4.33MB] 24.4MB          5   | | com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[52.7K/  2%/3.96MB] 15.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[52.7K/  2%/3.96MB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[52.7K/  2%/3.96MB] 15.7MB          1   | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[52.7K/  2%/3.96MB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[52.7K/  2%/3.96MB] 15.7MB          1   | | com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[35.9K/  1%/2.76MB] 8.16MB          1   | | com.intellij.debugger.engine.JavaValue
[35.5K/  1%/2.74MB] 7.84MB          1   | | com.intellij.debugger.engine.JavaDebugProcess$3
[35.5K/  1%/2.74MB] 7.83MB          1   | | com.intellij.debugger.engine.JavaDebugProcess
[17.9K/  0%/1.38MB] 4.16MB          1   | | com.intellij.xdebugger.impl.XDebugSessionImpl
[17.4K/  0%/1.32MB]  3.0MB          1 ! | | com.intellij.javaee.appServers.run.configuration.view.JavaeeConsoleViewImpl (disposed)
[17.4K/  0%/1.32MB] 2.94MB          1 ! | | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[17.2K/  0%/1.31MB] 2.78MB          1   | | javax.swing.JPanel
[17.2K/  0%/1.31MB] 2.78MB          1   | | java.awt.BorderLayout
[17.2K/  0%/1.31MB] 2.78MB          1   | | javax.swing.JPanel
[17.2K/  0%/1.31MB] 2.75MB          1   | | com.intellij.openapi.editor.impl.EditorImpl$$Lambda$1902
[17.2K/  0%/1.31MB] 2.75MB          1   | | com.intellij.openapi.editor.impl.EditorImpl
[16.4K/  0%/1.26MB] 2.14MB          1   | | com.intellij.openapi.editor.impl.DocumentImpl
[16.4K/  0%/1.26MB] 2.11MB          1   | | com.intellij.util.text.ImmutableText
[16.4K/  0%/1.26MB] 2.11MB          1   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB          2   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB          4   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB          8   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB         16   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB         32   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB         64   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB        128   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.11MB        256   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB]  2.1MB        512   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.08MB       1024   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/1.26MB] 2.06MB       2048   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.0K/  0%/1.23MB] 1.96MB       3748   | | com.intellij.util.text.ImmutableText$CompositeNode
[13.3K/  0%/1.02MB] 1.58MB       4781   | | com.intellij.util.text.ImmutableText$CompositeNode
[6.62K/  0%/ 515KB]  674KB       6625   | | java.lang.String
[6.62K/  0%/ 515KB]  515KB       6625 * | | byte[]
[34.0K/  1%/1.76MB] 9.47MB          5   | +-com.intellij.util.concurrency.SynchronizedClearableLazy
[34.0K/  1%/1.76MB] 9.47MB          5   | | java.util.concurrent.atomic.AtomicReference
[34.0K/  1%/1.76MB] 9.47MB          5   | | com.intellij.configurationScript.providers.MyProjectStore
[21.8K/  1%/ 880KB] 5.49MB          5   | | com.intellij.util.concurrency.SynchronizedClearableLazy
[21.8K/  1%/ 880KB] 5.49MB          5   | | java.util.concurrent.atomic.AtomicReference
[21.8K/  1%/ 880KB] 5.49MB          5   | | java.util.ArrayList
[21.8K/  1%/ 880KB] 5.49MB          5   | | java.lang.Object[]
[12.3K/  0%/ 501KB] 1.89MB          5 ! | | org.jetbrains.idea.maven.project.MavenProjectsManager (disposed)
[7.94K/  0%/ 332KB] 1.21MB          5   | | org.jetbrains.idea.maven.project.MavenProjectsTree
[5.33K/  0%/ 221KB]  812KB          3   | | java.util.ArrayList
[5.33K/  0%/ 221KB]  812KB          3   | | java.lang.Object[]
[5.33K/  0%/ 221KB]  811KB          3   | | org.jetbrains.idea.maven.project.MavenProject
[5.33K/  0%/ 221KB]  811KB          3   | | org.jetbrains.idea.maven.project.MavenProject$State
[4.44K/  0%/ 183KB]  655KB         20   | | java.util.ArrayList
[4.44K/  0%/ 183KB]  655KB         20   | | java.lang.Object[]
[2.76K/  0%/ 129KB]  282KB        610   | | org.jetbrains.idea.maven.model.MavenArtifact
[2.15K/  0%/66.2KB]  121KB       2152   | | java.lang.String
[2.15K/  0%/66.2KB] 69.5KB       2152 * | | byte[]
[22.9K/  1%/ 1.5MB] 10.3MB          5   | \-java.util.concurrent.ConcurrentHashMap
[22.9K/  1%/ 1.5MB] 10.3MB          5   |   java.util.concurrent.ConcurrentHashMap$Node[]
[22.9K/  1%/ 1.5MB] 8.53MB         41   |   java.util.concurrent.ConcurrentHashMap$Node
[12.8K/  0%/ 801KB] 6.62MB          3 ! |   com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[12.8K/  0%/ 801KB] 6.62MB          3   |   com.intellij.util.containers.SLRUMap
[12.8K/  0%/ 801KB] 6.62MB          3   |   com.intellij.util.containers.SLRUMap$1
[12.8K/  0%/ 801KB] 6.62MB          3   |   com.intellij.util.containers.hash.LinkedHashMap$Entry
[12.8K/  0%/ 801KB]  6.6MB          3   |   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[12.8K/  0%/ 801KB]  6.6MB          3   |   java.util.LinkedHashMap
[6.52K/  0%/ 401KB] 3.38MB          1   |   java.util.HashMap$TreeNode
[6.48K/  0%/ 398KB] 3.28MB          1   |   com.intellij.codeInsight.daemon.problems.ScopedMember
[6.48K/  0%/ 398KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[6.48K/  0%/ 398KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope$UnionScope
[6.48K/  0%/ 398KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope[]
[6.48K/  0%/ 398KB] 3.28MB          1   |   com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[6.48K/  0%/ 398KB] 3.28MB          1   |   java.util.LinkedHashSet
[6.48K/  0%/ 398KB] 3.28MB          1   |   java.util.LinkedHashMap
[6.48K/  0%/ 398KB] 3.28MB          1   |   java.util.LinkedHashMap$Entry
[6.48K/  0%/ 398KB] 3.28MB          1 ! |   com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[6.48K/  0%/ 398KB] 3.24MB          1   |   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[6.48K/  0%/ 398KB] 2.79MB          1   |   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl$Current
[6.48K/  0%/ 398KB] 2.79MB          1   |   com.intellij.workspaceModel.storage.impl.WorkspaceEntityStorageImpl
[ 5.8K/  0%/ 359KB] 2.54MB          1   |   com.intellij.workspaceModel.storage.impl.StorageIndexes
[5.12K/  0%/ 322KB] 2.05MB          1   |   com.intellij.workspaceModel.storage.impl.indices.VirtualFileIndex
[5.12K/  0%/ 322KB] 2.05MB          2   |   it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[5.12K/  0%/ 322KB] 2.04MB          3   |   java.lang.Object[]
[3.75K/  0%/ 268KB]  927KB       1002   |   com.intellij.workspaceModel.ide.impl.VirtualFileUrlBridge
[...removed 10 lines...]
[  128/  0%/23.0KB]  200KB          6     | java.lang.Object[]
[  128/  0%/23.0KB]  199KB         78     | com.apple.laf.ScreenMenu
[   50/  0%/21.7KB]  160KB          1     | java.util.Vector
[   50/  0%/21.7KB]  160KB          1     | java.lang.Object[]
[   15/  0%/20.8KB] 54.8KB         10     | com.apple.laf.ScreenMenuItemCheckbox
[    5/  0%/20.5KB] 43.0KB          5     | com.intellij.openapi.actionSystem.impl.ActionMenuItem
[    5/  0%/20.5KB] 32.5KB          5     | javax.swing.ImageIcon
[    5/  0%/20.5KB] 32.1KB          5     | java.awt.image.BaseMultiResolutionImage
[    5/  0%/20.5KB] 32.0KB          5     | java.awt.Image[]
[    5/  0%/20.5KB] 23.6KB          5     | java.awt.image.BufferedImage
[    5/  0%/20.5KB] 22.4KB          5     | sun.awt.image.ByteInterleavedRaster
[    5/  0%/20.5KB] 20.5KB          5 *   | byte[]
[   87/  0%/5.59KB]  490MB          6     \-com.intellij.ui.components.JBPanel
[   81/  0%/5.42KB]  247KB          5       java.awt.BorderLayout
[   81/  0%/5.42KB]  238KB          5 !     com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[   78/  0%/4.71KB]  217KB          5 !     com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[   45/  0%/3.21KB] 81.8KB          5       com.intellij.openapi.wm.impl.status.ProcessPopup
[   40/  0%/3.06KB] 67.4KB          5       com.intellij.openapi.wm.impl.status.ProcessPopup$1
[   40/  0%/3.06KB] 40.7KB         10       com.intellij.ui.components.JBScrollBar
[   40/  0%/3.06KB] 23.0KB         10       com.intellij.ui.components.MacScrollBarUI
[   20/  0%/1.53KB] 10.7KB         10       com.intellij.ui.components.ScrollBarPainter$Thumb
[   20/  0%/1.53KB] 5.32KB         10       com.intellij.ui.components.ScrollBarPainter$1
[   20/  0%/1.53KB]  3.4KB         20       com.intellij.ui.components.TwoWayAnimator$MyAnimator
[   20/  0%/1.53KB] 2.04KB         20       java.lang.String
[   20/  0%/1.53KB] 1.56KB         20 *     byte[]
Root 2:
[ 129K/  6%/8.89MB] 21.2MB          1   ROOT: Global JNI
[ 129K/  6%/8.89MB] 21.2MB          1   com.intellij.util.lang.PathClassLoader
[ 124K/  6%/8.68MB] 20.1MB          1   com.intellij.util.lang.ClassPath
[ 124K/  6%/8.68MB] 19.9MB          1   java.util.ArrayList
[ 124K/  6%/8.68MB] 19.9MB          1   java.lang.Object[]
[ 124K/  6%/8.68MB] 19.9MB        211   com.intellij.util.lang.JarLoader
[ 124K/  6%/8.66MB] 19.8MB        210   com.intellij.util.lang.ZipResourceFile
[ 124K/  6%/8.66MB] 19.8MB        210   com.intellij.util.zip.ImmutableZipFile
[ 124K/  6%/8.66MB] 17.8MB        210   com.intellij.util.zip.ImmutableZipEntry[]
[ 124K/  6%/8.66MB] 16.8MB     124390   com.intellij.util.zip.ImmutableZipEntry
[ 124K/  6%/8.66MB] 11.8MB     124390   java.lang.String
[ 124K/  6%/8.66MB] 8.85MB     124390 * byte[]
Root 3:
[43.7K/  2%/4.99MB] 9.62MB          1   ROOT: Global JNI
[43.7K/  2%/4.99MB] 9.62MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[41.1K/  2%/3.72MB] 7.51MB          1   com.intellij.util.lang.ClassPath
[41.1K/  2%/3.72MB] 7.43MB          1   java.util.ArrayList
[41.1K/  2%/3.72MB] 7.43MB          1   java.lang.Object[]
[41.1K/  2%/3.72MB] 7.43MB         70   com.intellij.util.lang.JarLoader
[41.0K/  2%/3.71MB] 7.41MB         70   com.intellij.util.lang.ZipResourceFile
[41.0K/  2%/3.71MB] 7.41MB         70   com.intellij.util.zip.ImmutableZipFile
[41.0K/  2%/3.71MB] 6.73MB         70   com.intellij.util.zip.ImmutableZipEntry[]
[41.0K/  2%/3.71MB]  6.4MB      41079   com.intellij.util.zip.ImmutableZipEntry
[41.0K/  2%/3.71MB] 4.76MB      41079   java.lang.String
[41.0K/  2%/3.71MB] 3.77MB      41079 * byte[]
Root 4:
[70.7K/  3%/4.12MB] 24.6MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.ManagingFS$ManagingFSHolder.ourInstance
[70.7K/  3%/4.12MB] 24.6MB          1   com.intellij.openapi.vfs.newvfs.persistent.PersistentFSImpl
[68.6K/  3%/4.02MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap
[68.6K/  3%/4.02MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap$Node[]
[68.6K/  3%/4.02MB] 9.39MB        949   com.intellij.concurrency.ConcurrentHashMap$Node
[67.0K/  3%/3.84MB] 9.02MB        948   com.intellij.openapi.vfs.newvfs.impl.FsRoot
[65.9K/  3%/3.73MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtFileSystemImpl
[65.9K/  3%/3.73MB] 8.57MB          1   java.util.Collections$SynchronizedMap
[65.9K/  3%/3.73MB] 8.57MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap
[65.9K/  3%/3.73MB] 8.57MB          2   java.lang.Object[]
[65.9K/  3%/3.73MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtHandler
[65.9K/  3%/3.73MB] 8.57MB          1 ! com.intellij.reference.SoftReference (soft)
[65.9K/  3%/3.73MB] 8.57MB          1   java.util.HashMap
[65.9K/  3%/3.73MB] 8.57MB          1   java.util.HashMap$Node[]
[65.9K/  3%/3.73MB] 8.04MB      26015   java.util.HashMap$Node
[26.0K/  1%/1.94MB]  2.6MB      26015   +-java.lang.String
[26.0K/  1%/1.94MB] 1.98MB      26015 * | byte[]
[26.3K/  1%/ 992KB] 2.82MB      26015   \-com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
[26.0K/  1%/ 987KB] 1.65MB      26015     java.lang.String
[26.0K/  1%/ 987KB] 1.02MB      26015 *   byte[]
Root 5:
[39.2K/  2%/3.48MB] 7.06MB          1   ROOT: Class definition: org.jetbrains.plugins.gradle.model.ExternalSourceDirectorySet
[39.2K/  2%/3.48MB] 7.06MB          1   java.lang.Class
[39.2K/  2%/3.48MB] 7.06MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[39.0K/  2%/3.47MB] 7.02MB          1   com.intellij.util.lang.ClassPath
[39.0K/  2%/3.47MB] 6.96MB          1   java.util.ArrayList
[39.0K/  2%/3.47MB] 6.96MB          1   java.lang.Object[]
[39.0K/  2%/3.47MB] 6.96MB          6   com.intellij.util.lang.JarLoader
[39.0K/  2%/3.46MB] 6.96MB          6   com.intellij.util.lang.ZipResourceFile
[39.0K/  2%/3.46MB] 6.96MB          6   com.intellij.util.zip.ImmutableZipFile
[39.0K/  2%/3.46MB] 6.33MB          6   com.intellij.util.zip.ImmutableZipEntry[]
[39.0K/  2%/3.46MB] 6.02MB      39045   com.intellij.util.zip.ImmutableZipEntry
[39.0K/  2%/3.46MB] 4.46MB      39045   java.lang.String
[39.0K/  2%/3.46MB] 3.52MB      39045 * byte[]
Root 6:
[37.7K/  1%/3.12MB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[37.7K/  1%/3.12MB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[37.7K/  1%/3.12MB] 36.0MB          1   java.util.HashMap
[37.7K/  1%/3.12MB] 36.0MB          1   java.util.HashMap$Node[]
[37.7K/  1%/3.12MB] 36.0MB          2   java.util.HashMap$Node
[37.7K/  1%/3.12MB] 36.0MB          2   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[37.3K/  1%/ 3.1MB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[29.5K/  1%/ 2.6MB] 28.0MB          1   com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[29.4K/  1%/2.58MB] 27.8MB          1   com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[29.4K/  1%/2.58MB] 27.8MB          1   com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[29.4K/  1%/2.58MB] 27.8MB          1   java.util.HashMap
[29.4K/  1%/2.58MB] 27.8MB          1   java.util.HashMap$Node[]
[29.4K/  1%/2.58MB] 27.8MB         10   java.util.HashMap$Node
[26.6K/  1%/2.32MB] 21.4MB          9   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[26.1K/  1%/ 2.3MB] 21.3MB          9   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[25.9K/  1%/2.22MB] 21.2MB          9   com.intellij.util.EventDispatcher
[25.9K/  1%/2.22MB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList
[25.9K/  1%/2.22MB] 21.2MB          9   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[25.9K/  1%/2.22MB] 21.2MB          9   java.lang.Object[]
[25.9K/  1%/2.22MB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[25.9K/  1%/2.22MB] 21.2MB          9   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[25.9K/  1%/2.22MB] 21.1MB          9 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[23.7K/  1%/1.57MB] 13.3MB          7   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[23.7K/  1%/1.57MB] 13.3MB          7 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[14.7K/  0%/ 933KB] 7.21MB          7 ! com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[14.1K/  0%/ 903KB] 6.43MB          7   com.intellij.xdebugger.impl.inline.InlineWatchesRootNode
[14.1K/  0%/ 903KB] 6.42MB          7 ! com.intellij.xdebugger.impl.ui.tree.XDebuggerTree (disposed)
[14.0K/  0%/ 898KB]  6.2MB          1   javax.swing.plaf.basic.BasicTreeUI$Handler
[14.0K/  0%/ 898KB]  6.2MB          1   javax.swing.tree.TreePath
[14.0K/  0%/ 898KB]  6.2MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.5K/  0%/ 864KB] 5.93MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.5K/  0%/ 864KB] 5.93MB          1   com.intellij.debugger.ui.impl.watch.ArrayElementDescriptorImpl
[13.5K/  0%/ 864KB] 5.92MB          1   com.jetbrains.jdi.ArrayReferenceImpl
[13.5K/  0%/ 864KB] 5.92MB          1   com.jetbrains.jdi.VirtualMachineImpl
[12.8K/  0%/ 822KB] 2.45MB          1   java.util.HashMap
[12.8K/  0%/ 822KB] 2.45MB          1   java.util.HashMap$Node[]
[12.8K/  0%/ 822KB] 2.19MB      10807   java.util.HashMap$Node
[10.8K/  0%/ 699KB]  974KB      10806   java.lang.String
[10.8K/  0%/ 699KB]  715KB      10806 * byte[]
Root 7:
[34.9K/  1%/2.88MB] 13.7MB          1   ROOT: Java Frame: com.intellij.openapi.progress.impl.CoreProgressManager.runProcessWithProgressSynchronously(CoreProgressManager.java:557)
[34.9K/  1%/2.88MB] 13.7MB          1   com.intellij.openapi.application.impl.ApplicationImpl
[34.4K/  1%/2.41MB] 13.0MB          1   com.intellij.util.pico.DefaultPicoContainer
[34.4K/  1%/2.41MB] 13.0MB          1   java.util.concurrent.ConcurrentHashMap
[34.4K/  1%/2.41MB] 13.0MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[34.4K/  1%/2.41MB] 13.0MB        517   java.util.concurrent.ConcurrentHashMap$Node
[15.3K/  0%/ 1.8MB] 10.1MB         34   com.intellij.serviceContainer.ServiceComponentAdapter
[10.6K/  0%/1.55MB] 8.39MB          1   org.jetbrains.plugins.textmate.TextMateServiceImpl
[10.0K/  0%/1.54MB] 6.69MB          1   org.jetbrains.plugins.textmate.language.syntax.TextMateSyntaxTable
[10.0K/  0%/1.54MB] 6.69MB          1   java.util.HashMap
[10.0K/  0%/1.54MB] 6.69MB          1   java.util.HashMap$Node[]
[10.0K/  0%/1.54MB] 6.69MB         51   java.util.HashMap$Node
[7.71K/  0%/1.29MB]  5.0MB         50   org.jetbrains.plugins.textmate.language.syntax.SyntaxNodeDescriptorImpl
[ 6.0K/  0%/ 746KB] 3.93MB         44   it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap
[ 6.0K/  0%/ 746KB] 3.91MB         44   java.lang.Object[]
[ 6.0K/  0%/ 746KB] 3.57MB       1208   org.jetbrains.plugins.textmate.language.syntax.SyntaxNodeDescriptorImpl
[3.49K/  0%/ 527KB] 2.08MB        490   java.util.ArrayList
[3.49K/  0%/ 527KB] 2.07MB        490   java.lang.Object[]
[3.49K/  0%/ 527KB] 1.87MB       1729   org.jetbrains.plugins.textmate.language.syntax.SyntaxNodeDescriptorImpl
[2.39K/  0%/ 259KB]  602KB       1464   java.util.EnumMap
[2.39K/  0%/ 259KB]  514KB       1464   java.lang.Object[]
[2.24K/  0%/ 251KB]  308KB       2244   java.lang.String
[2.24K/  0%/ 251KB]  255KB       2244 * byte[]
Root 8:
[ 150K/  7%/2.82MB] 17.8MB          1   ROOT: Static field: R.g
[ 150K/  7%/2.82MB] 17.8MB          1   R
[ 150K/  7%/2.82MB] 14.9MB          2   java.util.HashMap
[ 150K/  7%/2.82MB] 14.9MB          2   java.util.HashMap$Node[]
[ 141K/  7%/ 2.7MB] 11.9MB      84405   java.util.HashMap$Node
[68.2K/  3%/1.16MB] 3.71MB      34148   +-R$a
[68.2K/  3%/1.16MB] 2.89MB      68296   | java.lang.String
[68.2K/  3%/1.16MB] 1.25MB      68296 * | byte[]
[50.2K/  2%/1.16MB] 2.42MB      50257   +-java.lang.String
[50.2K/  2%/1.16MB] 1.22MB      50257 * | byte[]
[23.2K/  1%/ 367KB] 1.79MB       7471   \-java.util.HashMap$Node
[14.9K/  0%/ 243KB]  802KB       7471     R$a
[14.9K/  0%/ 243KB]  623KB      14942     java.lang.String
[14.9K/  0%/ 243KB]  264KB      14942 *   byte[]
Root 9:
[42.9K/  2%/2.79MB] 6.44MB          1   ROOT: Global JNI
[42.9K/  2%/2.79MB] 6.44MB          1   jdk.internal.loader.ClassLoaders$PlatformClassLoader
[42.8K/  2%/2.78MB] 6.42MB          4   java.util.concurrent.ConcurrentHashMap
[42.8K/  2%/2.78MB] 6.42MB          4   java.util.concurrent.ConcurrentHashMap$Node[]
[42.8K/  2%/2.78MB] 5.89MB      32835   java.util.concurrent.ConcurrentHashMap$Node
[32.7K/  1%/2.11MB] 2.95MB      32787   java.lang.String
[32.7K/  1%/2.11MB] 2.16MB      32787 * byte[]
Root 10:
[32.9K/  1%/2.78MB] 10.2MB          1   ROOT: Static field: jdk.internal.jimage.ImageReader$SharedImageReader!1.OPEN_FILES
[32.9K/  1%/2.78MB] 10.2MB          1   java.util.HashMap
[32.9K/  1%/2.78MB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  1%/2.78MB] 10.2MB          1   java.util.HashMap$Node
[32.9K/  1%/2.78MB] 10.2MB          1   jdk.internal.jimage.ImageReader$SharedImageReader!1
[32.9K/  1%/2.78MB] 10.2MB          1   java.util.HashMap
[32.9K/  1%/2.78MB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  1%/2.78MB] 9.68MB      25893   java.util.HashMap$Node
[25.8K/  1%/2.16MB] 2.82MB      25893   java.lang.String
[25.8K/  1%/2.16MB]  2.2MB      25893 * byte[]
Root 11:
[34.2K/  1%/2.75MB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[34.2K/  1%/2.75MB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[34.2K/  1%/2.75MB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[34.2K/  1%/2.75MB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[22.4K/  1%/1.65MB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[22.4K/  1%/1.65MB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[22.4K/  1%/1.65MB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree
[22.4K/  1%/1.65MB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[18.1K/  0%/1.46MB] 9.57MB          1   com.intellij.util.SmartList
[18.1K/  0%/1.46MB] 9.57MB          1   com.intellij.openapi.util.StaticGetter
[18.1K/  0%/1.46MB] 9.57MB          1   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[18.1K/  0%/1.46MB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[18.1K/  0%/1.46MB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[18.1K/  0%/1.46MB] 9.54MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[17.1K/  0%/1.14MB] 7.93MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[17.1K/  0%/1.14MB] 7.92MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[17.1K/  0%/1.14MB] 7.92MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[17.1K/  0%/1.14MB] 7.92MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.5K/  0%/ 865KB] 5.94MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.5K/  0%/ 865KB] 5.94MB          1   com.intellij.debugger.ui.impl.watch.FieldDescriptorImpl
[13.5K/  0%/ 865KB] 5.93MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[13.5K/  0%/ 865KB] 5.93MB          1   com.jetbrains.jdi.VirtualMachineImpl
[12.8K/  0%/ 823KB] 2.46MB          1   java.util.HashMap
[12.8K/  0%/ 823KB] 2.46MB          1   java.util.HashMap$Node[]
[12.8K/  0%/ 823KB] 2.19MB      10818   java.util.HashMap$Node
[10.8K/  0%/ 699KB]  975KB      10817   java.lang.String
[10.8K/  0%/ 699KB]  716KB      10817 * byte[]
Root 12:
[45.3K/  2%/2.05MB] 7.57MB          1   ROOT: Java Frame: com.intellij.openapi.actionSystem.ex.ActionUtil.performActionDumbAwareWithCallbacks(ActionUtil.java:267)
[45.3K/  2%/2.05MB] 7.57MB          1   com.intellij.openapi.actionSystem.impl.ActionManagerImpl
[45.2K/  2%/2.05MB] 7.08MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[45.2K/  2%/2.05MB] 7.08MB          2   java.lang.Object[]
[32.8K/  1%/1.53MB] 4.17MB        345   com.intellij.openapi.actionSystem.DefaultActionGroup
[30.4K/  1%/1.39MB] 3.04MB         66   com.intellij.openapi.actionSystem.Presentation
[30.3K/  1%/1.39MB] 2.98MB         47   com.intellij.openapi.actionSystem.impl.ActionManagerImpl$$Lambda$707
[30.3K/  1%/1.39MB] 2.97MB         47   java.util.PropertyResourceBundle
[30.3K/  1%/1.39MB] 2.97MB         47   java.util.HashMap
[30.3K/  1%/1.39MB] 2.97MB         47   java.util.HashMap$Node[]
[30.3K/  1%/1.39MB] 2.73MB      12134   java.util.HashMap$Node
[23.3K/  1%/1.07MB] 1.66MB      23377   java.lang.String
[23.3K/  1%/1.07MB]  1.1MB      23377 * byte[]
Root 13:
[50.6K/  2%/ 2.0MB]  6.3MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.impl.FileNameCache.ourNameCache
[50.6K/  2%/ 2.0MB]  6.3MB          1   com.intellij.util.IntSLRUCache[]
[50.6K/  2%/ 2.0MB]  6.3MB         16   com.intellij.util.IntSLRUCache
[50.6K/  2%/ 2.0MB]  6.3MB         32   com.intellij.util.containers.IntObjectLRUMap
[50.6K/  2%/ 2.0MB] 6.29MB         32   com.intellij.util.containers.IntObjectLRUMap$MapEntry[]
[50.6K/  2%/ 2.0MB] 5.52MB      39525   com.intellij.util.containers.IntObjectLRUMap$MapEntry
[39.5K/  2%/1.56MB] 2.57MB      39520   java.lang.String
[39.5K/  2%/1.56MB] 1.62MB      39520 * byte[]
Root 14:
[21.6K/  1%/1.67MB] 3.79MB          1   ROOT: Class definition: com.intellij.codeInspection.bytecodeAnalysis.InOutInterpreter
[21.6K/  1%/1.67MB] 3.79MB          1   java.lang.Class
[21.6K/  1%/1.67MB] 3.79MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.3K/  1%/1.61MB]  3.5MB          1   com.intellij.util.lang.ClassPath
[20.3K/  1%/1.61MB] 3.45MB          1   java.util.ArrayList
[20.3K/  1%/1.61MB] 3.45MB          1   java.lang.Object[]
[20.3K/  1%/1.61MB] 3.45MB         30   com.intellij.util.lang.JarLoader
[20.3K/  1%/1.61MB] 3.44MB         30   com.intellij.util.lang.ZipResourceFile
[20.3K/  1%/1.61MB] 3.44MB         30   com.intellij.util.zip.ImmutableZipFile
[20.3K/  1%/1.61MB] 3.11MB         30   com.intellij.util.zip.ImmutableZipEntry[]
[20.3K/  1%/1.61MB] 2.94MB      20356   com.intellij.util.zip.ImmutableZipEntry
[20.3K/  1%/1.61MB] 2.13MB      20356   java.lang.String
[20.3K/  1%/1.61MB] 1.64MB      20356 * byte[]
Root 15:
[20.9K/  1%/1.56MB] 3.49MB          1   ROOT: Class definition: circlet.client.api.ProjectTeamArena
[20.9K/  1%/1.56MB] 3.49MB          1   java.lang.Class
[20.9K/  1%/1.56MB] 3.49MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.6K/  1%/1.55MB] 3.43MB          1   com.intellij.util.lang.ClassPath
[20.6K/  1%/1.55MB]  3.4MB          1   java.util.ArrayList
[20.6K/  1%/1.55MB]  3.4MB          1   java.lang.Object[]
[20.6K/  1%/1.55MB]  3.4MB         26   com.intellij.util.lang.JarLoader
[20.6K/  1%/1.54MB] 3.39MB         26   com.intellij.util.lang.ZipResourceFile
[20.6K/  1%/1.54MB] 3.39MB         26   com.intellij.util.zip.ImmutableZipFile
[20.6K/  1%/1.54MB] 3.06MB         26   com.intellij.util.zip.ImmutableZipEntry[]
[20.6K/  1%/1.54MB] 2.89MB      20602   com.intellij.util.zip.ImmutableZipEntry
[20.6K/  1%/1.54MB] 2.07MB      20602   java.lang.String
[20.6K/  1%/1.54MB] 1.57MB      20602 * byte[]
Root 16:
[33.1K/  1%/1.53MB] 3.32MB          1   ROOT: Static field: com.intellij.AbstractBundle.ourCache
[33.1K/  1%/1.53MB] 3.32MB          1   com.intellij.util.containers.ConcurrentWeakHashMap
[33.1K/  1%/1.53MB] 3.32MB          1   java.util.concurrent.ConcurrentHashMap
[33.1K/  1%/1.53MB] 3.32MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[33.1K/  1%/1.53MB] 3.29MB         45   java.util.concurrent.ConcurrentHashMap$Node
[26.0K/  1%/1.21MB] 2.57MB         30   com.intellij.util.containers.ConcurrentSoftValueHashMap
[26.0K/  1%/1.21MB] 2.57MB         30   java.util.concurrent.ConcurrentHashMap
[26.0K/  1%/1.21MB] 2.57MB         30   java.util.concurrent.ConcurrentHashMap$Node[]
[26.0K/  1%/1.21MB] 2.56MB         51   java.util.concurrent.ConcurrentHashMap$Node
[24.8K/  1%/1.16MB] 2.45MB         46 ! com.intellij.util.containers.ConcurrentSoftValueHashMap$MySoftReference (soft)
[24.8K/  1%/1.16MB] 2.45MB         46   java.util.PropertyResourceBundle
[24.8K/  1%/1.16MB] 2.44MB         46   java.util.HashMap
[24.8K/  1%/1.16MB] 2.44MB         46   java.util.HashMap$Node[]
[24.8K/  1%/1.16MB] 2.24MB       9674   java.util.HashMap$Node
[19.3K/  1%/ 901KB] 1.39MB      19303   java.lang.String
[19.3K/  1%/ 901KB]  930KB      19303 * byte[]
Root 17:
[47.1K/  2%/ 800KB] 10.1MB          1   ROOT: Static field: com.alibaba.p3c.idea.pmd.SourceCodeProcessor.userTriggerNodeCache
[47.1K/  2%/ 800KB] 10.1MB          1   com.google.common.cache.LocalCache$LocalManualCache
[47.1K/  2%/ 800KB] 10.1MB          1   com.google.common.cache.LocalCache
[47.1K/  2%/ 800KB] 10.1MB          1   com.google.common.cache.LocalCache$Segment[]
[47.1K/  2%/ 800KB] 10.1MB         11   com.google.common.cache.LocalCache$Segment
[47.1K/  2%/ 800KB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue
[47.1K/  2%/ 800KB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue$1
[47.1K/  2%/ 800KB] 10.1MB         11   com.google.common.cache.LocalCache$StrongAccessWriteEntry
[47.1K/  2%/ 798KB] 10.1MB         11   com.google.common.cache.LocalCache$StrongValueReference
[47.1K/  2%/ 798KB] 10.1MB         11   net.sourceforge.pmd.lang.java.ast.ASTCompilationUnit
[45.6K/  2%/ 744KB] 9.19MB         11   net.sourceforge.pmd.lang.ast.Node[]
[43.8K/  2%/ 712KB] 8.87MB         11   net.sourceforge.pmd.lang.java.ast.ASTTypeDeclaration
[43.7K/  2%/ 710KB] 8.86MB         11   net.sourceforge.pmd.lang.ast.Node[]
[43.6K/  2%/ 709KB] 8.84MB         11   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceDeclaration
[32.3K/  1%/ 522KB] 6.57MB         11   net.sourceforge.pmd.lang.ast.Node[]
[32.3K/  1%/ 521KB] 6.57MB         11   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBody
[32.3K/  1%/ 521KB] 6.56MB         11   net.sourceforge.pmd.lang.ast.Node[]
[32.3K/  1%/ 521KB] 6.56MB        257   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBodyDeclaration
[28.3K/  1%/ 463KB]  6.1MB        256   net.sourceforge.pmd.lang.ast.Node[]
[24.1K/  1%/ 399KB] 5.33MB        135   net.sourceforge.pmd.lang.java.ast.ASTMethodDeclaration
[13.8K/  0%/ 209KB] 2.61MB        134   net.sourceforge.pmd.lang.ast.Node[]
[12.1K/  0%/ 182KB] 2.21MB        122   net.sourceforge.pmd.lang.java.ast.ASTBlock
[10.4K/  0%/ 158KB]  2.0MB         97   net.sourceforge.pmd.lang.ast.Node[]
[10.4K/  0%/ 158KB] 1.99MB        471   net.sourceforge.pmd.lang.java.ast.ASTBlockStatement
[7.05K/  0%/ 100KB]  732KB        529   net.sourceforge.pmd.lang.java.ast.Token
[6.84K/  0%/96.4KB]  695KB        908   net.sourceforge.pmd.lang.java.ast.Token
[6.22K/  0%/87.2KB]  622KB       1077   net.sourceforge.pmd.lang.java.ast.Token
[5.19K/  0%/71.5KB]  518KB        851   net.sourceforge.pmd.lang.java.ast.Token
[4.53K/  0%/62.2KB]  444KB        860   net.sourceforge.pmd.lang.java.ast.Token
[3.72K/  0%/50.0KB]  361KB        748   net.sourceforge.pmd.lang.java.ast.Token
[3.05K/  0%/40.8KB]  294KB        634   net.sourceforge.pmd.lang.java.ast.Token
[2.42K/  0%/32.0KB]  232KB        609   net.sourceforge.pmd.lang.java.ast.Token
[1.85K/  0%/24.5KB]  177KB        586   net.sourceforge.pmd.lang.java.ast.Token
[1.27K/  0%/16.7KB]  123KB        588   net.sourceforge.pmd.lang.java.ast.Token
[  754/  0%/9.99KB] 71.6KB        133   net.sourceforge.pmd.lang.java.ast.Token
[  624/  0%/8.21KB] 58.9KB         83   net.sourceforge.pmd.lang.java.ast.Token
[  547/  0%/7.21KB] 51.5KB         80   net.sourceforge.pmd.lang.java.ast.Token
[  468/  0%/6.15KB] 44.1KB         81   net.sourceforge.pmd.lang.java.ast.Token
[  391/  0%/5.15KB] 36.8KB         78   net.sourceforge.pmd.lang.java.ast.Token
[  314/  0%/ 4.1KB] 29.3KB         75   net.sourceforge.pmd.lang.java.ast.Token
[  235/  0%/3.05KB] 21.6KB         64   net.sourceforge.pmd.lang.java.ast.Token
[  171/  0%/2.22KB] 15.7KB         62   net.sourceforge.pmd.lang.java.ast.Token
[  109/  0%/1.41KB] 10.0KB         62   net.sourceforge.pmd.lang.java.ast.Token
[   62/  0%/  806B] 2.48KB         62   java.lang.String
[   62/  0%/  806B]   992B         62 * byte[]
Root 18:
[22.4K/  1%/ 672KB] 1.77MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter.occurencesMap
[22.4K/  1%/ 672KB] 1.77MB          1   java.util.HashMap
[22.4K/  1%/ 672KB] 1.77MB          1   java.util.HashMap$Node[]
[22.4K/  1%/ 672KB] 1.77MB         26   java.util.HashMap$Node
[22.4K/  1%/ 672KB] 1.77MB         26   java.util.ArrayList
[22.4K/  1%/ 672KB] 1.77MB         26   java.lang.Object[]
[22.4K/  1%/ 672KB] 1.66MB      10706   com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter$Occurence
[21.4K/  1%/ 646KB] 1.19MB      21412   java.lang.String
[21.4K/  1%/ 646KB]  678KB      21412 * byte[]
Root 19:
[24.9K/  1%/ 637KB] 3.61MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.method.MethodCompletionGetter.helper
[24.9K/  1%/ 637KB] 3.61MB          1   com.codota.intellij.common.completion.CompletionGetterHelper
[24.9K/  1%/ 637KB] 3.61MB          1   com.google.common.cache.LocalCache$LocalManualCache
[24.9K/  1%/ 637KB] 3.61MB          1   com.google.common.cache.LocalCache
[24.9K/  1%/ 637KB] 3.61MB          1   com.google.common.cache.LocalCache$Segment[]
[24.9K/  1%/ 637KB] 3.61MB          4   com.google.common.cache.LocalCache$Segment
[20.4K/  1%/ 529KB] 2.96MB          4   java.util.concurrent.atomic.AtomicReferenceArray
[20.4K/  1%/ 529KB] 2.96MB          4   java.lang.Object[]
[20.4K/  1%/ 529KB] 2.95MB        101   com.google.common.cache.LocalCache$StrongAccessWriteEntry
[17.8K/  0%/ 455KB] 2.55MB         50   com.google.common.cache.LocalCache$StrongValueReference
[17.8K/  0%/ 455KB] 2.55MB         50   java.util.concurrent.CompletableFuture
[17.8K/  0%/ 455KB] 2.55MB         50   com.codota.intellij.lean.assistant.model.Completions
[17.8K/  0%/ 455KB] 2.55MB         50   java.util.ArrayList
[17.8K/  0%/ 455KB] 2.55MB         50   java.lang.Object[]
[17.8K/  0%/ 455KB] 2.53MB       2024   com.codota.intellij.lean.assistant.model.MethodCompletionBean
[9.29K/  0%/ 271KB]  787KB       2024   com.codota.intellij.common.model.MethodSignature
[4.04K/  0%/ 135KB]  317KB       4048   com.codota.intellij.common.model.Type
[4.04K/  0%/ 135KB]  236KB       4048   java.lang.String
[4.04K/  0%/ 135KB]  139KB       4048 * byte[]
Root 20:
[    1/  0%/   81B]   184B          1   ROOT: Static field: com.jetbrains.plugins.webDeployment.ui.config.DeploymentConfigurable.LOG
[    1/  0%/   81B]   184B          1   com.intellij.idea.IdeaLogger
[    1/  0%/   81B]   168B          1   org.apache.log4j.Logger
[    1/  0%/   81B]   108B          1   java.lang.String
[    1/  0%/   81B]    84B          1 * byte[]
Report for byte[] created in 8.492 s

CLASS: java.lang.Object[] (358039 objects)
Ignored 7666 too-deep objects
Root 1:
[ 100K/ 28%/10.3MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[ 100K/ 28%/10.3MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[ 100K/ 28%/8.98MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[ 100K/ 28%/8.98MB]  619MB          2   java.lang.Object[]
[69.0K/ 19%/5.22MB]  566MB         11   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[69.0K/ 19%/5.22MB]  566MB         11   com.intellij.openapi.util.Ref
[69.0K/ 19%/5.22MB]  566MB         11   com.intellij.openapi.wm.impl.ToolWindowImpl
[69.0K/ 19%/5.22MB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[47.8K/ 13%/3.55MB] 48.5MB          5 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[20.1K/  5%/2.25MB] 10.3MB          5   | +-java.util.concurrent.ConcurrentHashMap
[20.1K/  5%/2.25MB] 10.3MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[20.1K/  5%/2.25MB] 10.3MB         85   | | java.util.concurrent.ConcurrentHashMap$Node
[13.1K/  3%/ 2.0MB] 6.62MB          3 ! | | com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[13.1K/  3%/ 2.0MB] 6.62MB          3   | | com.intellij.util.containers.SLRUMap
[13.1K/  3%/ 2.0MB] 6.62MB          3   | | com.intellij.util.containers.SLRUMap$1
[13.1K/  3%/ 2.0MB] 6.62MB          3   | | com.intellij.util.containers.hash.LinkedHashMap$Entry
[13.1K/  3%/ 2.0MB]  6.6MB          3   | | com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[13.1K/  3%/ 2.0MB]  6.6MB          3   | | java.util.LinkedHashMap
[5.84K/  1%/ 1.2MB] 3.38MB          1   | | java.util.HashMap$TreeNode
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | com.intellij.codeInsight.daemon.problems.ScopedMember
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | com.intellij.psi.search.GlobalSearchScope$UnionScope
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | com.intellij.psi.search.GlobalSearchScope[]
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | java.util.LinkedHashSet
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | java.util.LinkedHashMap
[5.81K/  1%/ 1.2MB] 3.28MB          1   | | java.util.LinkedHashMap$Entry
[5.81K/  1%/ 1.2MB] 3.28MB          1 ! | | com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[5.79K/  1%/1.18MB] 3.24MB          1   | | com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[3.81K/  1%/1.14MB] 2.79MB          1   | | com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl$Current
[3.81K/  1%/1.14MB] 2.79MB          1   | | com.intellij.workspaceModel.storage.impl.WorkspaceEntityStorageImpl
[3.46K/  0%/ 1.1MB] 2.54MB          1   | | com.intellij.workspaceModel.storage.impl.StorageIndexes
[3.44K/  0%/1.06MB] 2.05MB          1   | | com.intellij.workspaceModel.storage.impl.indices.VirtualFileIndex
[3.44K/  0%/1.06MB] 2.05MB          2   | | it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[3.44K/  0%/1.06MB] 2.05MB          4   | | java.lang.Object[]
[3.01K/  0%/ 839KB] 1.08MB       1342   | | it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[3.01K/  0%/ 839KB]  947KB       2684   | | java.lang.Object[]
[  329/  0%/90.8KB]  105KB        329   | | it.unimi.dsi.fastutil.objects.ObjectOpenHashSet
[  329/  0%/90.8KB] 90.8KB        329 * | | java.lang.Object[]
[24.9K/  7%/1.02MB] 26.9MB          5   | \-com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[24.9K/  7%/1.02MB] 26.9MB          5   |   java.util.concurrent.ConcurrentHashMap
[24.9K/  7%/1.02MB] 26.9MB          5   |   java.util.concurrent.ConcurrentHashMap$Node[]
[24.9K/  7%/1.02MB] 26.9MB        400   |   java.util.concurrent.ConcurrentHashMap$Node
[24.8K/  7%/1.01MB] 26.8MB        365   |   com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[23.7K/  6%/ 941KB] 25.7MB          1   |   com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[23.7K/  6%/ 941KB] 25.7MB          1   |   com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[23.7K/  6%/ 940KB] 25.7MB          1   |   com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[23.7K/  6%/ 939KB] 25.7MB          1   |   java.util.HashMap
[23.7K/  6%/ 939KB] 25.7MB          1   |   java.util.HashMap$Node[]
[23.7K/  6%/ 939KB] 25.6MB          4   |   java.util.HashMap$Node
[23.4K/  6%/ 911KB] 24.4MB          3   |   com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[23.4K/  6%/ 911KB] 24.4MB          3   |   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[19.4K/  5%/ 617KB] 15.7MB          1   |   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[19.4K/  5%/ 617KB] 15.7MB          1 ! |   com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[19.4K/  5%/ 616KB] 15.7MB          1   |   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[19.4K/  5%/ 616KB] 15.7MB          1 ! |   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[19.4K/  5%/ 616KB] 15.7MB          1   |   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[15.1K/  4%/ 319KB]  7.0MB          1   |   com.intellij.debugger.engine.JavaValuePresentation
[15.1K/  4%/ 319KB]  7.0MB          1   |   com.intellij.debugger.ui.impl.watch.UserExpressionDescriptorImpl
[15.1K/  4%/ 319KB] 6.99MB          1   |   com.jetbrains.jdi.ObjectReferenceImpl
[15.1K/  4%/ 319KB] 6.99MB          1   |   com.jetbrains.jdi.VirtualMachineImpl
[15.1K/  4%/ 306KB]  2.8MB          1   |   java.util.HashMap
[15.1K/  4%/ 306KB]  2.8MB          1   |   java.util.HashMap$Node[]
[15.1K/  4%/ 306KB] 2.53MB      12196   |   java.util.HashMap$Node
[12.1K/  3%/ 246KB]  539KB      12196   |   java.util.ArrayList
[12.1K/  3%/ 246KB]  246KB      12196 * |   java.lang.Object[]
[1.93K/  0%/ 140KB]  496MB          7   \-com.intellij.openapi.wm.impl.ToolWindowsPane
[  805/  0%/61.6KB]  666KB          7     +-com.intellij.openapi.wm.impl.IdeFrameImpl
[  746/  0%/57.4KB]  627KB          6     | com.apple.laf.ScreenMenuBar
[  176/  0%/19.5KB]  114KB          6     | com.intellij.openapi.wm.impl.IdeMenuBar
[   82/  0%/12.8KB] 30.8KB          6     | com.intellij.openapi.actionSystem.impl.MenuItemPresentationFactory
[   82/  0%/12.8KB] 30.7KB          6     | com.intellij.util.containers.WeakHashMap
[   82/  0%/12.8KB] 29.8KB          6     | com.intellij.util.containers.RefHashMap$MyMap
[   82/  0%/12.8KB] 29.3KB         12     | java.lang.Object[]
[   70/  0%/3.09KB] 12.1KB         70     | com.intellij.openapi.actionSystem.Presentation
[   70/  0%/3.09KB] 4.21KB         70     | com.intellij.util.SmartFMap
[   70/  0%/3.09KB] 3.09KB         70 *   | java.lang.Object[]
[  413/  0%/27.5KB]  490MB          7     \-com.intellij.ui.components.JBPanel
[  315/  0%/21.7KB]  253KB          6       +-java.awt.BorderLayout
[  297/  0%/20.8KB]  242KB          6 !     | com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[  249/  0%/17.6KB]  217KB          5 !     | com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[   92/  0%/5.76KB] 81.8KB          5       | com.intellij.openapi.wm.impl.status.ProcessPopup
[   65/  0%/3.98KB] 67.4KB          5       | com.intellij.openapi.wm.impl.status.ProcessPopup$1
[   50/  0%/2.92KB] 40.7KB         10       | com.intellij.ui.components.JBScrollBar
[   20/  0%/1.68KB] 4.64KB         10       | com.intellij.ui.components.Interpolator
[   10/  0%/ 1.4KB] 1.64KB         10       | java.util.ArrayDeque
[   10/  0%/ 1.4KB]  1.4KB         10 *     | java.lang.Object[]
[   72/  0%/4.06KB]  490MB          6       \-com.intellij.openapi.wm.impl.IdeRootPane$1
[   72/  0%/4.06KB]  490MB          6         com.intellij.openapi.wm.impl.IdeRootPane
[   36/  0%/1.95KB]  490MB          6         com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   12/  0%/1.42KB] 1.71KB         12         +-java.util.ArrayList
[   12/  0%/1.42KB] 1.42KB         12 *       | java.lang.Object[]
[   18/  0%/  360B]  490MB          6         \-java.util.HashMap
[   18/  0%/  360B]  490MB          6           java.util.HashMap$Node[]
[   18/  0%/  360B]  490MB         12           java.util.HashMap$Node
[   18/  0%/  360B]  490MB         12           com.intellij.openapi.wm.impl.PaintersHelper
[   18/  0%/  360B]  490MB         12           java.util.LinkedHashMap
[   18/  0%/  360B]  490MB         18           java.util.LinkedHashMap$Entry
[   12/  0%/  240B]  490MB         12           com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   12/  0%/  240B]   432B         12           com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[   12/  0%/  240B]   240B         12 *         java.lang.Object[]
Root 2:
[51.1K/ 14%/3.02MB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[51.1K/ 14%/3.02MB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[51.1K/ 14%/3.02MB] 36.0MB          1   java.util.HashMap
[51.1K/ 14%/3.02MB] 36.0MB          1   java.util.HashMap$Node[]
[51.1K/ 14%/3.02MB] 36.0MB          2   java.util.HashMap$Node
[51.1K/ 14%/3.02MB] 36.0MB          2   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[51.1K/ 14%/3.01MB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[40.3K/ 11%/2.02MB] 28.0MB          1   com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[40.1K/ 11%/ 2.0MB] 27.8MB          1   com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[40.1K/ 11%/ 2.0MB] 27.8MB          1   com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[40.1K/ 11%/ 2.0MB] 27.8MB          1   java.util.HashMap
[40.1K/ 11%/ 2.0MB] 27.8MB          1   java.util.HashMap$Node[]
[40.1K/ 11%/ 2.0MB] 27.8MB         10   java.util.HashMap$Node
[31.7K/  9%/1.46MB] 21.4MB          9   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[31.7K/  9%/1.46MB] 21.3MB          9   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[31.6K/  9%/1.45MB] 21.2MB          9   com.intellij.util.EventDispatcher
[31.6K/  9%/1.45MB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList
[31.6K/  9%/1.45MB] 21.2MB          9   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[31.6K/  9%/1.45MB] 21.2MB          9   java.lang.Object[]
[31.6K/  9%/1.45MB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[31.6K/  9%/1.45MB] 21.2MB          9   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[31.6K/  9%/1.45MB] 21.1MB          9 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[22.3K/  6%/ 815KB] 13.3MB          7   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[22.3K/  6%/ 815KB] 13.3MB          7 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[14.6K/  4%/ 365KB] 7.21MB          7 ! com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[13.7K/  3%/ 316KB] 6.43MB          7   com.intellij.xdebugger.impl.inline.InlineWatchesRootNode
[13.7K/  3%/ 315KB] 6.42MB          7 ! com.intellij.xdebugger.impl.ui.tree.XDebuggerTree (disposed)
[13.5K/  3%/ 300KB]  6.2MB          1   javax.swing.plaf.basic.BasicTreeUI$Handler
[13.5K/  3%/ 300KB]  6.2MB          1   javax.swing.tree.TreePath
[13.5K/  3%/ 300KB]  6.2MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.1K/  3%/ 269KB] 5.93MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.1K/  3%/ 269KB] 5.93MB          1   com.intellij.debugger.ui.impl.watch.ArrayElementDescriptorImpl
[13.1K/  3%/ 269KB] 5.92MB          1   com.jetbrains.jdi.ArrayReferenceImpl
[13.1K/  3%/ 269KB] 5.92MB          1   com.jetbrains.jdi.VirtualMachineImpl
[13.0K/  3%/ 261KB] 2.45MB          1   java.util.HashMap
[13.0K/  3%/ 261KB] 2.45MB          1   java.util.HashMap$Node[]
[13.0K/  3%/ 261KB] 2.19MB      10812   java.util.HashMap$Node
[10.8K/  3%/ 216KB]  475KB      10812   java.util.ArrayList
[10.8K/  3%/ 216KB]  216KB      10812 * java.lang.Object[]
Root 3:
[21.8K/  6%/ 875KB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[21.8K/  6%/ 875KB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[21.8K/  6%/ 875KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[21.7K/  6%/ 874KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[18.3K/  5%/ 657KB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[18.3K/  5%/ 657KB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[18.3K/  5%/ 657KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree
[18.3K/  5%/ 657KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[15.9K/  4%/ 461KB] 9.57MB          1   com.intellij.util.SmartList
[15.9K/  4%/ 461KB] 9.57MB          1   com.intellij.openapi.util.StaticGetter
[15.9K/  4%/ 461KB] 9.57MB          1   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[15.9K/  4%/ 461KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[15.9K/  4%/ 461KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[15.9K/  4%/ 459KB] 9.54MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[15.4K/  4%/ 425KB] 7.93MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[15.4K/  4%/ 424KB] 7.92MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[15.4K/  4%/ 424KB] 7.92MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[15.4K/  4%/ 424KB] 7.92MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.1K/  3%/ 269KB] 5.94MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.1K/  3%/ 269KB] 5.94MB          1   com.intellij.debugger.ui.impl.watch.FieldDescriptorImpl
[13.1K/  3%/ 269KB] 5.93MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[13.1K/  3%/ 269KB] 5.93MB          1   com.jetbrains.jdi.VirtualMachineImpl
[13.0K/  3%/ 261KB] 2.46MB          1   java.util.HashMap
[13.0K/  3%/ 261KB] 2.46MB          1   java.util.HashMap$Node[]
[13.0K/  3%/ 261KB] 2.19MB      10823   java.util.HashMap$Node
[10.8K/  3%/ 216KB]  476KB      10823   java.util.ArrayList
[10.8K/  3%/ 216KB]  216KB      10823 * java.lang.Object[]
Root 4:
[  112/  0%/ 113KB] 1.77MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter.occurencesMap
[  112/  0%/ 113KB] 1.77MB          1   java.util.HashMap
[  112/  0%/ 113KB] 1.77MB          1   java.util.HashMap$Node[]
[  112/  0%/ 113KB] 1.77MB         26   java.util.HashMap$Node
[  112/  0%/ 113KB] 1.77MB         26   java.util.ArrayList
[  112/  0%/ 113KB] 1.77MB         26   java.lang.Object[]
[   86/  0%/9.15KB]  101KB         86   com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter$Occurence
[   86/  0%/9.15KB] 89.5KB         86   java.util.ArrayList
[   86/  0%/9.15KB] 87.5KB         86 * java.lang.Object[]
Root 5:
[    3/  0%/  220B] 2.84KB          1   ROOT: Static field: jdk.internal.jimage.ImageReader$SharedImageReader!1.<resolved_references>
[    3/  0%/  220B] 2.84KB          1   java.lang.Object[]
[    2/  0%/   56B]   516B          1   java.lang.invoke.DirectMethodHandle
[    2/  0%/   56B]   412B          1   java.lang.invoke.LambdaForm
[    2/  0%/   56B]   288B          1   java.lang.invoke.LambdaForm$Name[]
[    2/  0%/   56B]   236B          2   java.lang.invoke.LambdaForm$Name
[    2/  0%/   56B]    56B          2 * java.lang.Object[]
Report for java.lang.Object[] created in 1.785 s

CLASS: java.lang.String (1878015 objects)
Ignored 7715 too-deep objects
Root 1:
[ 203K/ 10%/4.26MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[ 203K/ 10%/4.26MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[ 203K/ 10%/4.26MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[ 203K/ 10%/4.26MB]  619MB          1   java.lang.Object[]
[ 126K/  6%/2.65MB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[ 126K/  6%/2.65MB]  566MB          9   com.intellij.openapi.util.Ref
[ 126K/  6%/2.65MB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[ 126K/  6%/2.65MB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[ 116K/  6%/2.44MB] 48.5MB          5 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[61.0K/  3%/1.28MB] 26.9MB          5   | +-com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[61.0K/  3%/1.28MB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap
[61.0K/  3%/1.28MB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[61.0K/  3%/1.28MB] 26.4MB         67   | | java.util.concurrent.ConcurrentHashMap$Node
[61.0K/  3%/1.28MB] 26.3MB         62   | | com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[60.4K/  3%/1.26MB] 25.7MB          1   | | com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[60.4K/  3%/1.26MB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[60.4K/  3%/1.26MB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[60.4K/  3%/1.26MB] 25.7MB          1   | | java.util.HashMap
[60.4K/  3%/1.26MB] 25.7MB          1   | | java.util.HashMap$Node[]
[60.4K/  3%/1.26MB] 25.7MB          7   | | java.util.HashMap$Node
[59.6K/  3%/1.25MB] 24.4MB          5   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[59.6K/  3%/1.25MB] 24.4MB          5   | | com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[52.8K/  2%/ 1.1MB] 15.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[52.8K/  2%/ 1.1MB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[52.7K/  2%/ 1.1MB] 15.7MB          1   | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[52.7K/  2%/ 1.1MB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[52.7K/  2%/ 1.1MB] 15.7MB          1   | | com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[36.0K/  1%/ 756KB] 8.16MB          1   | | com.intellij.debugger.engine.JavaValue
[35.6K/  1%/ 748KB] 7.84MB          1   | | com.intellij.debugger.engine.JavaDebugProcess$3
[35.6K/  1%/ 748KB] 7.83MB          1   | | com.intellij.debugger.engine.JavaDebugProcess
[17.9K/  0%/ 376KB] 4.16MB          1   | | com.intellij.xdebugger.impl.XDebugSessionImpl
[17.4K/  0%/ 367KB]  3.0MB          1 ! | | com.intellij.javaee.appServers.run.configuration.view.JavaeeConsoleViewImpl (disposed)
[17.4K/  0%/ 367KB] 2.94MB          1 ! | | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[17.2K/  0%/ 362KB] 2.78MB          1   | | javax.swing.JPanel
[17.2K/  0%/ 362KB] 2.78MB          1   | | java.awt.BorderLayout
[17.2K/  0%/ 362KB] 2.78MB          1   | | javax.swing.JPanel
[17.2K/  0%/ 362KB] 2.75MB          1   | | com.intellij.openapi.editor.impl.EditorImpl$$Lambda$1902
[17.2K/  0%/ 362KB] 2.75MB          1   | | com.intellij.openapi.editor.impl.EditorImpl
[16.4K/  0%/ 345KB] 2.14MB          1   | | com.intellij.openapi.editor.impl.DocumentImpl
[16.4K/  0%/ 345KB] 2.11MB          1   | | com.intellij.util.text.ImmutableText
[16.4K/  0%/ 345KB] 2.11MB          1   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB          2   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB          4   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB          8   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB         16   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB         32   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB         64   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB        128   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.11MB        256   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB]  2.1MB        512   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.08MB       1024   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.4K/  0%/ 345KB] 2.06MB       2048   | | com.intellij.util.text.ImmutableText$CompositeNode
[16.0K/  0%/ 338KB] 1.96MB       3748   | | com.intellij.util.text.ImmutableText$CompositeNode
[13.3K/  0%/ 281KB] 1.58MB       4781   | | com.intellij.util.text.ImmutableText$CompositeNode
[6.76K/  0%/ 141KB]  781KB       2937   | | com.intellij.util.text.ImmutableText$CompositeNode
[ 5.0K/  0%/ 105KB]  499KB       5009 * | | java.lang.String
[33.7K/  1%/ 708KB] 9.47MB          5   | +-com.intellij.util.concurrency.SynchronizedClearableLazy
[33.7K/  1%/ 708KB] 9.47MB          5   | | java.util.concurrent.atomic.AtomicReference
[33.7K/  1%/ 708KB] 9.47MB          5   | | com.intellij.configurationScript.providers.MyProjectStore
[21.7K/  1%/ 456KB] 5.49MB          5   | | com.intellij.util.concurrency.SynchronizedClearableLazy
[21.7K/  1%/ 456KB] 5.49MB          5   | | java.util.concurrent.atomic.AtomicReference
[21.7K/  1%/ 456KB] 5.49MB          5   | | java.util.ArrayList
[21.7K/  1%/ 456KB] 5.49MB          5   | | java.lang.Object[]
[12.3K/  0%/ 259KB] 1.89MB          5 ! | | org.jetbrains.idea.maven.project.MavenProjectsManager (disposed)
[7.94K/  0%/ 166KB] 1.21MB          5   | | org.jetbrains.idea.maven.project.MavenProjectsTree
[5.33K/  0%/ 112KB]  812KB          3   | | java.util.ArrayList
[5.33K/  0%/ 112KB]  812KB          3   | | java.lang.Object[]
[5.33K/  0%/ 112KB]  811KB          3   | | org.jetbrains.idea.maven.project.MavenProject
[5.33K/  0%/ 112KB]  811KB          3   | | org.jetbrains.idea.maven.project.MavenProject$State
[4.44K/  0%/93.2KB]  655KB         20   | | java.util.ArrayList
[4.44K/  0%/93.2KB]  655KB         20   | | java.lang.Object[]
[2.76K/  0%/58.0KB]  282KB        610   | | org.jetbrains.idea.maven.model.MavenArtifact
[2.15K/  0%/45.1KB]  121KB       2152 * | | java.lang.String
[21.1K/  1%/ 445KB] 10.3MB          5   | \-java.util.concurrent.ConcurrentHashMap
[21.1K/  1%/ 445KB] 10.3MB          5   |   java.util.concurrent.ConcurrentHashMap$Node[]
[21.1K/  1%/ 445KB] 8.53MB         36   |   java.util.concurrent.ConcurrentHashMap$Node
[12.8K/  0%/ 270KB] 6.62MB          3 ! |   com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[12.8K/  0%/ 270KB] 6.62MB          3   |   com.intellij.util.containers.SLRUMap
[12.8K/  0%/ 270KB] 6.62MB          3   |   com.intellij.util.containers.SLRUMap$1
[12.8K/  0%/ 270KB] 6.62MB          3   |   com.intellij.util.containers.hash.LinkedHashMap$Entry
[12.8K/  0%/ 270KB]  6.6MB          3   |   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[12.8K/  0%/ 270KB]  6.6MB          3   |   java.util.LinkedHashMap
[6.52K/  0%/ 137KB] 3.38MB          1   |   java.util.HashMap$TreeNode
[6.48K/  0%/ 136KB] 3.28MB          1   |   com.intellij.codeInsight.daemon.problems.ScopedMember
[6.48K/  0%/ 136KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[6.48K/  0%/ 136KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope$UnionScope
[6.48K/  0%/ 136KB] 3.28MB          1   |   com.intellij.psi.search.GlobalSearchScope[]
[6.48K/  0%/ 136KB] 3.28MB          1   |   com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[6.48K/  0%/ 136KB] 3.28MB          1   |   java.util.LinkedHashSet
[6.48K/  0%/ 136KB] 3.28MB          1   |   java.util.LinkedHashMap
[6.48K/  0%/ 136KB] 3.28MB          1   |   java.util.LinkedHashMap$Entry
[6.48K/  0%/ 136KB] 3.28MB          1 ! |   com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[6.48K/  0%/ 136KB] 3.24MB          1   |   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[6.48K/  0%/ 136KB] 2.79MB          1   |   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl$Current
[6.48K/  0%/ 136KB] 2.79MB          1   |   com.intellij.workspaceModel.storage.impl.WorkspaceEntityStorageImpl
[ 5.8K/  0%/ 121KB] 2.54MB          1   |   com.intellij.workspaceModel.storage.impl.StorageIndexes
[5.12K/  0%/ 107KB] 2.05MB          1   |   com.intellij.workspaceModel.storage.impl.indices.VirtualFileIndex
[5.12K/  0%/ 107KB] 2.05MB          2   |   it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[5.12K/  0%/ 107KB] 2.04MB          3   |   java.lang.Object[]
[3.75K/  0%/78.9KB]  927KB       1002   |   com.intellij.workspaceModel.ide.impl.VirtualFileUrlBridge
[2.75K/  0%/57.8KB]  742KB          1   |   com.intellij.workspaceModel.ide.impl.IdeVirtualFileUrlManagerImpl
[2.18K/  0%/45.8KB]  301KB          1   |   com.intellij.workspaceModel.storage.impl.VirtualFileNameStore
[2.18K/  0%/45.8KB]  192KB          1   |   it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap
[2.18K/  0%/45.8KB]  175KB          1   |   java.lang.Object[]
[2.18K/  0%/45.8KB]  143KB       2183 * |   java.lang.String
[  451/  0%/9.47KB]  496MB          7   \-com.intellij.openapi.wm.impl.ToolWindowsPane
[  236/  0%/4.95KB]  666KB          7     +-com.intellij.openapi.wm.impl.IdeFrameImpl
[  208/  0%/4.36KB]  627KB          6     | com.apple.laf.ScreenMenuBar
[  123/  0%/2.58KB]  200KB          6     | java.util.Vector
[  123/  0%/2.58KB]  200KB          6     | java.lang.Object[]
[  123/  0%/2.58KB]  199KB         78     | com.apple.laf.ScreenMenu
[   78/  0%/1.63KB] 3.26KB         78 *   | java.lang.String
[   87/  0%/1.82KB]  490MB          6     \-com.intellij.ui.components.JBPanel
[   81/  0%/ 1.7KB]  247KB          5       java.awt.BorderLayout
[   81/  0%/ 1.7KB]  238KB          5 !     com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[   78/  0%/1.63KB]  217KB          5 !     com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[   45/  0%/  945B] 81.8KB          5       com.intellij.openapi.wm.impl.status.ProcessPopup
[   40/  0%/  840B] 67.4KB          5       com.intellij.openapi.wm.impl.status.ProcessPopup$1
[   40/  0%/  840B] 40.7KB         10       com.intellij.ui.components.JBScrollBar
[   40/  0%/  840B] 23.0KB         10       com.intellij.ui.components.MacScrollBarUI
[   20/  0%/  420B] 10.7KB         10       com.intellij.ui.components.ScrollBarPainter$Thumb
[   20/  0%/  420B] 5.32KB         10       com.intellij.ui.components.ScrollBarPainter$1
[   20/  0%/  420B]  3.4KB         20       com.intellij.ui.components.TwoWayAnimator$MyAnimator
[   20/  0%/  420B] 2.04KB         20 *     java.lang.String
Root 2:
[ 150K/  8%/3.15MB] 17.8MB          1   ROOT: Static field: R.g
[ 150K/  8%/3.15MB] 17.8MB          1   R
[ 150K/  8%/3.15MB] 14.9MB          2   java.util.HashMap
[ 150K/  8%/3.15MB] 14.9MB          2   java.util.HashMap$Node[]
[ 141K/  7%/2.97MB] 11.9MB      84405   java.util.HashMap$Node
[68.2K/  3%/1.43MB] 3.71MB      34148   +-R$a
[68.2K/  3%/1.43MB] 2.89MB      68296 * | java.lang.String
[50.2K/  2%/1.05MB] 2.42MB      50257 * +-java.lang.String
[23.2K/  1%/ 488KB] 1.79MB       7471   \-java.util.HashMap$Node
[14.9K/  0%/ 313KB]  802KB       7471     R$a
[14.9K/  0%/ 313KB]  623KB      14942 *   java.lang.String
Root 3:
[ 128K/  6%/ 2.7MB] 21.2MB          1   ROOT: Global JNI
[ 128K/  6%/ 2.7MB] 21.2MB          1   com.intellij.util.lang.PathClassLoader
[ 124K/  6%/2.61MB] 20.1MB          1   com.intellij.util.lang.ClassPath
[ 124K/  6%/2.61MB] 19.9MB          1   java.util.ArrayList
[ 124K/  6%/2.61MB] 19.9MB          1   java.lang.Object[]
[ 124K/  6%/2.61MB] 19.9MB        211   com.intellij.util.lang.JarLoader
[ 124K/  6%/2.61MB] 19.8MB        210   com.intellij.util.lang.ZipResourceFile
[ 124K/  6%/2.61MB] 19.8MB        210   com.intellij.util.zip.ImmutableZipFile
[ 124K/  6%/2.61MB] 17.8MB        210   com.intellij.util.zip.ImmutableZipEntry[]
[ 124K/  6%/2.61MB] 16.8MB     124390   com.intellij.util.zip.ImmutableZipEntry
[ 124K/  6%/2.61MB] 11.8MB     124390 * java.lang.String
Root 4:
[70.7K/  3%/1.48MB] 24.6MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.ManagingFS$ManagingFSHolder.ourInstance
[70.7K/  3%/1.48MB] 24.6MB          1   com.intellij.openapi.vfs.newvfs.persistent.PersistentFSImpl
[68.6K/  3%/1.44MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap
[68.6K/  3%/1.44MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap$Node[]
[68.6K/  3%/1.44MB] 9.39MB        949   com.intellij.concurrency.ConcurrentHashMap$Node
[67.0K/  3%/ 1.4MB] 9.02MB        948   com.intellij.openapi.vfs.newvfs.impl.FsRoot
[65.9K/  3%/1.38MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtFileSystemImpl
[65.9K/  3%/1.38MB] 8.57MB          1   java.util.Collections$SynchronizedMap
[65.9K/  3%/1.38MB] 8.57MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap
[65.9K/  3%/1.38MB] 8.57MB          2   java.lang.Object[]
[65.9K/  3%/1.38MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtHandler
[65.9K/  3%/1.38MB] 8.57MB          1 ! com.intellij.reference.SoftReference (soft)
[65.9K/  3%/1.38MB] 8.57MB          1   java.util.HashMap
[65.9K/  3%/1.38MB] 8.57MB          1   java.util.HashMap$Node[]
[65.9K/  3%/1.38MB] 8.04MB      26015   java.util.HashMap$Node
[26.3K/  1%/ 552KB] 2.82MB      26015   +-com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
[26.0K/  1%/ 546KB] 1.65MB      26015 * | java.lang.String
[26.0K/  1%/ 546KB]  2.6MB      26015 * \-java.lang.String
Root 5:
[50.6K/  2%/1.06MB]  6.3MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.impl.FileNameCache.ourNameCache
[50.6K/  2%/1.06MB]  6.3MB          1   com.intellij.util.IntSLRUCache[]
[50.6K/  2%/1.06MB]  6.3MB         16   com.intellij.util.IntSLRUCache
[50.6K/  2%/1.06MB]  6.3MB         32   com.intellij.util.containers.IntObjectLRUMap
[50.6K/  2%/1.06MB] 6.29MB         32   com.intellij.util.containers.IntObjectLRUMap$MapEntry[]
[50.6K/  2%/1.06MB] 5.52MB      39525   com.intellij.util.containers.IntObjectLRUMap$MapEntry
[39.5K/  2%/ 829KB] 2.57MB      39520 * java.lang.String
Root 6:
[47.1K/  2%/ 990KB] 10.1MB          1   ROOT: Static field: com.alibaba.p3c.idea.pmd.SourceCodeProcessor.userTriggerNodeCache
[47.1K/  2%/ 990KB] 10.1MB          1   com.google.common.cache.LocalCache$LocalManualCache
[47.1K/  2%/ 990KB] 10.1MB          1   com.google.common.cache.LocalCache
[47.1K/  2%/ 990KB] 10.1MB          1   com.google.common.cache.LocalCache$Segment[]
[47.1K/  2%/ 990KB] 10.1MB         11   com.google.common.cache.LocalCache$Segment
[47.1K/  2%/ 990KB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue
[47.1K/  2%/ 990KB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue$1
[47.1K/  2%/ 990KB] 10.1MB         11   com.google.common.cache.LocalCache$StrongAccessWriteEntry
[47.1K/  2%/ 990KB] 10.1MB         11   com.google.common.cache.LocalCache$StrongValueReference
[47.1K/  2%/ 990KB] 10.1MB         11   net.sourceforge.pmd.lang.java.ast.ASTCompilationUnit
[45.6K/  2%/ 958KB] 9.19MB         11   net.sourceforge.pmd.lang.ast.Node[]
[43.8K/  2%/ 921KB] 8.87MB         11   net.sourceforge.pmd.lang.java.ast.ASTTypeDeclaration
[43.7K/  2%/ 919KB] 8.86MB         11   net.sourceforge.pmd.lang.ast.Node[]
[43.7K/  2%/ 917KB] 8.84MB         11   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceDeclaration
[32.3K/  1%/ 680KB] 6.57MB         11   net.sourceforge.pmd.lang.ast.Node[]
[32.3K/  1%/ 680KB] 6.57MB         11   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBody
[32.3K/  1%/ 679KB] 6.56MB         11   net.sourceforge.pmd.lang.ast.Node[]
[32.3K/  1%/ 679KB] 6.56MB        257   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBodyDeclaration
[28.3K/  1%/ 595KB]  6.1MB        256   net.sourceforge.pmd.lang.ast.Node[]
[24.1K/  1%/ 507KB] 5.33MB        135   net.sourceforge.pmd.lang.java.ast.ASTMethodDeclaration
[13.8K/  0%/ 290KB] 2.61MB        134   net.sourceforge.pmd.lang.ast.Node[]
[12.1K/  0%/ 255KB] 2.21MB        122   net.sourceforge.pmd.lang.java.ast.ASTBlock
[10.4K/  0%/ 220KB]  2.0MB         97   net.sourceforge.pmd.lang.ast.Node[]
[10.4K/  0%/ 220KB] 1.99MB        471   net.sourceforge.pmd.lang.java.ast.ASTBlockStatement
[7.05K/  0%/ 148KB]  732KB        529   net.sourceforge.pmd.lang.java.ast.Token
[6.84K/  0%/ 143KB]  695KB        908   net.sourceforge.pmd.lang.java.ast.Token
[6.22K/  0%/ 130KB]  622KB       1077   net.sourceforge.pmd.lang.java.ast.Token
[5.19K/  0%/ 109KB]  518KB        851   net.sourceforge.pmd.lang.java.ast.Token
[4.53K/  0%/95.2KB]  444KB        860   net.sourceforge.pmd.lang.java.ast.Token
[3.72K/  0%/78.3KB]  361KB        748   net.sourceforge.pmd.lang.java.ast.Token
[3.05K/  0%/64.1KB]  294KB        634   net.sourceforge.pmd.lang.java.ast.Token
[2.42K/  0%/50.9KB]  232KB        609   net.sourceforge.pmd.lang.java.ast.Token
[1.85K/  0%/38.9KB]  177KB        586   net.sourceforge.pmd.lang.java.ast.Token
[1.27K/  0%/26.7KB]  123KB        588   net.sourceforge.pmd.lang.java.ast.Token
[  754/  0%/15.8KB] 71.6KB        133   net.sourceforge.pmd.lang.java.ast.Token
[  624/  0%/13.1KB] 58.9KB         83   net.sourceforge.pmd.lang.java.ast.Token
[  547/  0%/11.4KB] 51.5KB         80   net.sourceforge.pmd.lang.java.ast.Token
[  468/  0%/9.82KB] 44.1KB         81   net.sourceforge.pmd.lang.java.ast.Token
[  391/  0%/8.21KB] 36.8KB         78   net.sourceforge.pmd.lang.java.ast.Token
[  314/  0%/6.59KB] 29.3KB         75   net.sourceforge.pmd.lang.java.ast.Token
[  235/  0%/4.93KB] 21.6KB         64   net.sourceforge.pmd.lang.java.ast.Token
[  171/  0%/3.59KB] 15.7KB         62   net.sourceforge.pmd.lang.java.ast.Token
[  109/  0%/2.28KB] 10.0KB         62   net.sourceforge.pmd.lang.java.ast.Token
[   62/  0%/ 1.3KB] 2.48KB         62 * java.lang.String
Root 7:
[45.3K/  2%/ 952KB] 7.57MB          1   ROOT: Java Frame: com.intellij.openapi.actionSystem.ex.ActionUtil.performActionDumbAwareWithCallbacks(ActionUtil.java:267)
[45.3K/  2%/ 952KB] 7.57MB          1   com.intellij.openapi.actionSystem.impl.ActionManagerImpl
[45.2K/  2%/ 950KB] 7.08MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[45.2K/  2%/ 950KB] 7.08MB          2   java.lang.Object[]
[32.8K/  1%/ 689KB] 4.17MB        345   com.intellij.openapi.actionSystem.DefaultActionGroup
[30.4K/  1%/ 639KB] 3.04MB         66   com.intellij.openapi.actionSystem.Presentation
[30.3K/  1%/ 637KB] 2.98MB         47   com.intellij.openapi.actionSystem.impl.ActionManagerImpl$$Lambda$707
[30.3K/  1%/ 637KB] 2.97MB         47   java.util.PropertyResourceBundle
[30.3K/  1%/ 637KB] 2.97MB         47   java.util.HashMap
[30.3K/  1%/ 637KB] 2.97MB         47   java.util.HashMap$Node[]
[30.3K/  1%/ 637KB] 2.73MB      12134   java.util.HashMap$Node
[23.3K/  1%/ 490KB] 1.66MB      23377 * java.lang.String
Root 8:
[43.6K/  2%/ 916KB] 9.62MB          1   ROOT: Global JNI
[43.6K/  2%/ 916KB] 9.62MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[41.1K/  2%/ 864KB] 7.51MB          1   com.intellij.util.lang.ClassPath
[41.1K/  2%/ 864KB] 7.43MB          1   java.util.ArrayList
[41.1K/  2%/ 864KB] 7.43MB          1   java.lang.Object[]
[41.1K/  2%/ 864KB] 7.43MB         70   com.intellij.util.lang.JarLoader
[41.0K/  2%/ 862KB] 7.41MB         70   com.intellij.util.lang.ZipResourceFile
[41.0K/  2%/ 862KB] 7.41MB         70   com.intellij.util.zip.ImmutableZipFile
[41.0K/  2%/ 862KB] 6.73MB         70   com.intellij.util.zip.ImmutableZipEntry[]
[41.0K/  2%/ 862KB]  6.4MB      41079   com.intellij.util.zip.ImmutableZipEntry
[41.0K/  2%/ 862KB] 4.76MB      41079 * java.lang.String
Root 9:
[42.9K/  2%/ 901KB] 6.44MB          1   ROOT: Global JNI
[42.9K/  2%/ 901KB] 6.44MB          1   jdk.internal.loader.ClassLoaders$PlatformClassLoader
[42.8K/  2%/ 899KB] 6.42MB          4   java.util.concurrent.ConcurrentHashMap
[42.8K/  2%/ 899KB] 6.42MB          4   java.util.concurrent.ConcurrentHashMap$Node[]
[42.8K/  2%/ 899KB] 5.89MB      32835   java.util.concurrent.ConcurrentHashMap$Node
[32.7K/  1%/ 688KB] 2.95MB      32787 * java.lang.String
Root 10:
[39.2K/  2%/ 823KB] 7.06MB          1   ROOT: Class definition: org.jetbrains.plugins.gradle.model.ExternalSourceDirectorySet
[39.2K/  2%/ 823KB] 7.06MB          1   java.lang.Class
[39.2K/  2%/ 823KB] 7.06MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[39.0K/  2%/ 820KB] 7.02MB          1   com.intellij.util.lang.ClassPath
[39.0K/  2%/ 820KB] 6.96MB          1   java.util.ArrayList
[39.0K/  2%/ 820KB] 6.96MB          1   java.lang.Object[]
[39.0K/  2%/ 820KB] 6.96MB          6   com.intellij.util.lang.JarLoader
[39.0K/  2%/ 819KB] 6.96MB          6   com.intellij.util.lang.ZipResourceFile
[39.0K/  2%/ 819KB] 6.96MB          6   com.intellij.util.zip.ImmutableZipFile
[39.0K/  2%/ 819KB] 6.33MB          6   com.intellij.util.zip.ImmutableZipEntry[]
[39.0K/  2%/ 819KB] 6.02MB      39045   com.intellij.util.zip.ImmutableZipEntry
[39.0K/  2%/ 819KB] 4.46MB      39045 * java.lang.String
Root 11:
[37.6K/  2%/ 790KB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[37.6K/  2%/ 790KB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[37.6K/  2%/ 790KB] 36.0MB          1   java.util.HashMap
[37.6K/  2%/ 790KB] 36.0MB          1   java.util.HashMap$Node[]
[37.6K/  2%/ 790KB] 36.0MB          2   java.util.HashMap$Node
[37.6K/  2%/ 790KB] 36.0MB          2   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[37.2K/  1%/ 782KB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[29.4K/  1%/ 618KB] 28.0MB          1   com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[29.3K/  1%/ 616KB] 27.8MB          1   com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[29.3K/  1%/ 616KB] 27.8MB          1   com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[29.3K/  1%/ 616KB] 27.8MB          1   java.util.HashMap
[29.3K/  1%/ 616KB] 27.8MB          1   java.util.HashMap$Node[]
[29.3K/  1%/ 616KB] 27.8MB         10   java.util.HashMap$Node
[26.5K/  1%/ 558KB] 21.4MB          9   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[26.0K/  1%/ 547KB] 21.3MB          9   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[25.9K/  1%/ 544KB] 21.2MB          9   com.intellij.util.EventDispatcher
[25.9K/  1%/ 544KB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList
[25.9K/  1%/ 544KB] 21.2MB          9   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[25.9K/  1%/ 544KB] 21.2MB          9   java.lang.Object[]
[25.9K/  1%/ 544KB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[25.9K/  1%/ 544KB] 21.2MB          9   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[25.9K/  1%/ 544KB] 21.1MB          9 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[23.7K/  1%/ 498KB] 13.3MB          7   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[23.7K/  1%/ 498KB] 13.3MB          7 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[14.7K/  0%/ 309KB] 7.21MB          7 ! com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[14.1K/  0%/ 297KB] 6.43MB          7   com.intellij.xdebugger.impl.inline.InlineWatchesRootNode
[14.1K/  0%/ 297KB] 6.42MB          7 ! com.intellij.xdebugger.impl.ui.tree.XDebuggerTree (disposed)
[14.0K/  0%/ 295KB]  6.2MB          1   javax.swing.plaf.basic.BasicTreeUI$Handler
[14.0K/  0%/ 295KB]  6.2MB          1   javax.swing.tree.TreePath
[14.0K/  0%/ 295KB]  6.2MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.5K/  0%/ 284KB] 5.93MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.5K/  0%/ 284KB] 5.93MB          1   com.intellij.debugger.ui.impl.watch.ArrayElementDescriptorImpl
[13.5K/  0%/ 284KB] 5.92MB          1   com.jetbrains.jdi.ArrayReferenceImpl
[13.5K/  0%/ 284KB] 5.92MB          1   com.jetbrains.jdi.VirtualMachineImpl
[12.8K/  0%/ 269KB] 2.45MB          1   java.util.HashMap
[12.8K/  0%/ 269KB] 2.45MB          1   java.util.HashMap$Node[]
[12.8K/  0%/ 269KB] 2.19MB      10807   java.util.HashMap$Node
[10.8K/  0%/ 226KB]  974KB      10806 * java.lang.String
Root 12:
[34.8K/  1%/ 731KB] 13.7MB          1   ROOT: Java Frame: com.intellij.openapi.progress.impl.CoreProgressManager.runProcessWithProgressSynchronously(CoreProgressManager.java:557)
[34.8K/  1%/ 731KB] 13.7MB          1   com.intellij.openapi.application.impl.ApplicationImpl
[34.3K/  1%/ 720KB] 13.0MB          1   com.intellij.util.pico.DefaultPicoContainer
[34.3K/  1%/ 720KB] 13.0MB          1   java.util.concurrent.ConcurrentHashMap
[34.3K/  1%/ 720KB] 13.0MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[34.3K/  1%/ 720KB] 13.0MB        517   java.util.concurrent.ConcurrentHashMap$Node
[18.6K/  0%/ 390KB]  2.5MB         23   java.util.concurrent.ConcurrentHashMap$Node
[18.5K/  0%/ 390KB]  2.5MB         13   com.intellij.serviceContainer.ServiceComponentAdapter
[18.4K/  0%/ 387KB]  2.3MB          1   com.intellij.ide.ui.search.SearchableOptionsRegistrarImpl
[10.2K/  0%/ 214KB]  878KB          1   com.intellij.ide.ui.search.IndexedCharsInterner
[10.2K/  0%/ 214KB]  822KB          1   com.intellij.ide.ui.search.IndexedCharsInterner$1
[10.2K/  0%/ 214KB]  821KB          1   java.lang.Object[]
[10.2K/  0%/ 214KB]  646KB      10227 * java.lang.String
Root 13:
[34.1K/  1%/ 716KB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[34.1K/  1%/ 716KB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[34.1K/  1%/ 716KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[34.1K/  1%/ 716KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[22.3K/  1%/ 469KB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[22.3K/  1%/ 469KB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[22.3K/  1%/ 469KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree
[22.3K/  1%/ 469KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[18.1K/  0%/ 380KB] 9.57MB          1   com.intellij.util.SmartList
[18.1K/  0%/ 380KB] 9.57MB          1   com.intellij.openapi.util.StaticGetter
[18.1K/  0%/ 380KB] 9.57MB          1   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[18.1K/  0%/ 380KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[18.1K/  0%/ 380KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[18.0K/  0%/ 380KB] 9.54MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[17.0K/  0%/ 359KB] 7.93MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[17.0K/  0%/ 359KB] 7.92MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[17.0K/  0%/ 359KB] 7.92MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[17.0K/  0%/ 359KB] 7.92MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.5K/  0%/ 284KB] 5.94MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.5K/  0%/ 284KB] 5.94MB          1   com.intellij.debugger.ui.impl.watch.FieldDescriptorImpl
[13.5K/  0%/ 284KB] 5.93MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[13.5K/  0%/ 284KB] 5.93MB          1   com.jetbrains.jdi.VirtualMachineImpl
[12.8K/  0%/ 269KB] 2.46MB          1   java.util.HashMap
[12.8K/  0%/ 269KB] 2.46MB          1   java.util.HashMap$Node[]
[12.8K/  0%/ 269KB] 2.19MB      10818   java.util.HashMap$Node
[10.8K/  0%/ 227KB]  975KB      10817 * java.lang.String
Root 14:
[33.1K/  1%/ 696KB] 3.32MB          1   ROOT: Static field: com.intellij.AbstractBundle.ourCache
[33.1K/  1%/ 696KB] 3.32MB          1   com.intellij.util.containers.ConcurrentWeakHashMap
[33.1K/  1%/ 696KB] 3.32MB          1   java.util.concurrent.ConcurrentHashMap
[33.1K/  1%/ 696KB] 3.32MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[33.1K/  1%/ 696KB] 3.29MB         45   java.util.concurrent.ConcurrentHashMap$Node
[26.0K/  1%/ 547KB] 2.57MB         30   com.intellij.util.containers.ConcurrentSoftValueHashMap
[26.0K/  1%/ 547KB] 2.57MB         30   java.util.concurrent.ConcurrentHashMap
[26.0K/  1%/ 547KB] 2.57MB         30   java.util.concurrent.ConcurrentHashMap$Node[]
[26.0K/  1%/ 547KB] 2.56MB         51   java.util.concurrent.ConcurrentHashMap$Node
[24.8K/  1%/ 522KB] 2.45MB         46 ! com.intellij.util.containers.ConcurrentSoftValueHashMap$MySoftReference (soft)
[24.8K/  1%/ 522KB] 2.45MB         46   java.util.PropertyResourceBundle
[24.8K/  1%/ 522KB] 2.44MB         46   java.util.HashMap
[24.8K/  1%/ 522KB] 2.44MB         46   java.util.HashMap$Node[]
[24.8K/  1%/ 522KB] 2.24MB       9674   java.util.HashMap$Node
[19.3K/  1%/ 405KB] 1.39MB      19305 * java.lang.String
Root 15:
[32.9K/  1%/ 692KB] 10.2MB          1   ROOT: Static field: jdk.internal.jimage.ImageReader$SharedImageReader!1.OPEN_FILES
[32.9K/  1%/ 692KB] 10.2MB          1   java.util.HashMap
[32.9K/  1%/ 692KB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  1%/ 692KB] 10.2MB          1   java.util.HashMap$Node
[32.9K/  1%/ 692KB] 10.2MB          1   jdk.internal.jimage.ImageReader$SharedImageReader!1
[32.9K/  1%/ 692KB] 10.2MB          1   java.util.HashMap
[32.9K/  1%/ 692KB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  1%/ 692KB] 9.68MB      25893   java.util.HashMap$Node
[25.8K/  1%/ 543KB] 2.82MB      25893 * java.lang.String
Root 16:
[24.9K/  1%/ 524KB] 3.61MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.method.MethodCompletionGetter.helper
[24.9K/  1%/ 524KB] 3.61MB          1   com.codota.intellij.common.completion.CompletionGetterHelper
[24.9K/  1%/ 524KB] 3.61MB          1   com.google.common.cache.LocalCache$LocalManualCache
[24.9K/  1%/ 524KB] 3.61MB          1   com.google.common.cache.LocalCache
[24.9K/  1%/ 524KB] 3.61MB          1   com.google.common.cache.LocalCache$Segment[]
[24.9K/  1%/ 524KB] 3.61MB          4   com.google.common.cache.LocalCache$Segment
[20.4K/  1%/ 430KB] 2.96MB          4   java.util.concurrent.atomic.AtomicReferenceArray
[20.4K/  1%/ 430KB] 2.96MB          4   java.lang.Object[]
[20.4K/  1%/ 430KB] 2.95MB        101   com.google.common.cache.LocalCache$StrongAccessWriteEntry
[17.8K/  0%/ 374KB] 2.55MB         50   com.google.common.cache.LocalCache$StrongValueReference
[17.8K/  0%/ 374KB] 2.55MB         50   java.util.concurrent.CompletableFuture
[17.8K/  0%/ 374KB] 2.55MB         50   com.codota.intellij.lean.assistant.model.Completions
[17.8K/  0%/ 374KB] 2.55MB         50   java.util.ArrayList
[17.8K/  0%/ 374KB] 2.55MB         50   java.lang.Object[]
[17.8K/  0%/ 374KB] 2.53MB       2024   com.codota.intellij.lean.assistant.model.MethodCompletionBean
[9.29K/  0%/ 195KB]  787KB       2024   com.codota.intellij.common.model.MethodSignature
[4.04K/  0%/85.0KB]  317KB       4048   com.codota.intellij.common.model.Type
[4.04K/  0%/85.0KB]  236KB       4048 * java.lang.String
Root 17:
[22.4K/  1%/ 470KB] 1.77MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter.occurencesMap
[22.4K/  1%/ 470KB] 1.77MB          1   java.util.HashMap
[22.4K/  1%/ 470KB] 1.77MB          1   java.util.HashMap$Node[]
[22.4K/  1%/ 470KB] 1.77MB         26   java.util.HashMap$Node
[22.4K/  1%/ 470KB] 1.77MB         26   java.util.ArrayList
[22.4K/  1%/ 470KB] 1.77MB         26   java.lang.Object[]
[22.4K/  1%/ 470KB] 1.66MB      10706   com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter$Occurence
[21.4K/  1%/ 449KB] 1.19MB      21412 * java.lang.String
Root 18:
[21.6K/  1%/ 454KB] 3.79MB          1   ROOT: Class definition: com.intellij.codeInspection.bytecodeAnalysis.InOutInterpreter
[21.6K/  1%/ 454KB] 3.79MB          1   java.lang.Class
[21.6K/  1%/ 454KB] 3.79MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.3K/  1%/ 428KB]  3.5MB          1   com.intellij.util.lang.ClassPath
[20.3K/  1%/ 428KB] 3.45MB          1   java.util.ArrayList
[20.3K/  1%/ 428KB] 3.45MB          1   java.lang.Object[]
[20.3K/  1%/ 428KB] 3.45MB         30   com.intellij.util.lang.JarLoader
[20.3K/  1%/ 427KB] 3.44MB         30   com.intellij.util.lang.ZipResourceFile
[20.3K/  1%/ 427KB] 3.44MB         30   com.intellij.util.zip.ImmutableZipFile
[20.3K/  1%/ 427KB] 3.11MB         30   com.intellij.util.zip.ImmutableZipEntry[]
[20.3K/  1%/ 427KB] 2.94MB      20356   com.intellij.util.zip.ImmutableZipEntry
[20.3K/  1%/ 427KB] 2.13MB      20356 * java.lang.String
Root 19:
[20.9K/  1%/ 439KB] 3.49MB          1   ROOT: Class definition: circlet.client.api.ProjectTeamArena
[20.9K/  1%/ 439KB] 3.49MB          1   java.lang.Class
[20.9K/  1%/ 439KB] 3.49MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.6K/  1%/ 433KB] 3.43MB          1   com.intellij.util.lang.ClassPath
[20.6K/  1%/ 433KB]  3.4MB          1   java.util.ArrayList
[20.6K/  1%/ 433KB]  3.4MB          1   java.lang.Object[]
[20.6K/  1%/ 433KB]  3.4MB         26   com.intellij.util.lang.JarLoader
[20.6K/  1%/ 432KB] 3.39MB         26   com.intellij.util.lang.ZipResourceFile
[20.6K/  1%/ 432KB] 3.39MB         26   com.intellij.util.zip.ImmutableZipFile
[20.6K/  1%/ 432KB] 3.06MB         26   com.intellij.util.zip.ImmutableZipEntry[]
[20.6K/  1%/ 432KB] 2.89MB      20602   com.intellij.util.zip.ImmutableZipEntry
[20.6K/  1%/ 432KB] 2.07MB      20602 * java.lang.String
Root 20:
[    1/  0%/   21B]   184B          1   ROOT: Static field: com.jetbrains.plugins.webDeployment.ui.config.DeploymentConfigurable.LOG
[    1/  0%/   21B]   184B          1   com.intellij.idea.IdeaLogger
[    1/  0%/   21B]   168B          1   org.apache.log4j.Logger
[    1/  0%/   21B]   108B          1 * java.lang.String
Report for java.lang.String created in 6.503 s

CLASS: java.util.HashMap$Node (563620 objects)
Ignored 3782 too-deep objects
Root 1:
[ 146K/ 26%/5.27MB] 17.8MB          1   ROOT: Static field: R.g
[ 146K/ 26%/5.27MB] 17.8MB          1   R
[ 146K/ 26%/5.27MB] 17.8MB          4   java.util.HashMap
[ 146K/ 26%/5.27MB] 17.8MB          4   java.util.HashMap$Node[]
[ 146K/ 26%/5.27MB] 13.8MB     126315   java.util.HashMap$Node
[20.2K/  3%/ 728KB]  2.1MB      14984   java.util.HashMap$Node
[5.25K/  0%/ 189KB]  677KB       3198   java.util.HashMap$Node
[2.05K/  0%/73.9KB]  301KB       1063   java.util.HashMap$Node
[  990/  0%/35.6KB]  150KB        521   java.util.HashMap$Node
[  469/  0%/16.8KB] 71.5KB        279   java.util.HashMap$Node
[  190/  0%/6.84KB] 29.0KB        134   java.util.HashMap$Node
[   56/  0%/2.01KB] 8.53KB         56 * java.util.HashMap$Node
Root 2:
[ 101K/ 18%/3.64MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[ 101K/ 18%/3.64MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[ 101K/ 18%/3.64MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[ 101K/ 18%/3.64MB]  619MB          1   java.lang.Object[]
[55.8K/  9%/2.01MB]  566MB          9   +-cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[55.8K/  9%/2.01MB]  566MB          9   | com.intellij.openapi.util.Ref
[55.8K/  9%/2.01MB]  566MB          9   | com.intellij.openapi.wm.impl.ToolWindowImpl
[55.8K/  9%/2.01MB]  566MB          9   | com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[50.9K/  9%/1.83MB] 48.5MB          5 ! | +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[21.4K/  3%/ 770KB] 26.9MB          5   | | com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[21.4K/  3%/ 770KB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap
[21.4K/  3%/ 770KB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[21.4K/  3%/ 770KB] 26.2MB         22   | | java.util.concurrent.ConcurrentHashMap$Node
[21.4K/  3%/ 770KB] 26.2MB         22   | | com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[21.2K/  3%/ 763KB] 25.7MB          1   | | com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[21.2K/  3%/ 763KB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[21.2K/  3%/ 763KB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[21.2K/  3%/ 763KB] 25.7MB          1   | | java.util.HashMap
[21.2K/  3%/ 763KB] 25.7MB          1   | | java.util.HashMap$Node[]
[21.2K/  3%/ 763KB] 25.7MB          7   | | java.util.HashMap$Node
[20.5K/  3%/ 741KB] 24.4MB          2   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[20.5K/  3%/ 741KB] 24.4MB          2   | | com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[17.4K/  3%/ 629KB] 15.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[17.4K/  3%/ 628KB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[17.4K/  3%/ 628KB] 15.7MB          1   | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[17.4K/  3%/ 628KB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[17.4K/  3%/ 628KB] 15.7MB          1   | | com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[16.6K/  2%/ 598KB]  7.0MB          1   | | com.intellij.debugger.engine.JavaValuePresentation
[16.6K/  2%/ 598KB]  7.0MB          1   | | com.intellij.debugger.ui.impl.watch.UserExpressionDescriptorImpl
[16.6K/  2%/ 598KB] 6.99MB          1   | | com.jetbrains.jdi.ObjectReferenceImpl
[16.6K/  2%/ 598KB] 6.99MB          1   | | com.jetbrains.jdi.VirtualMachineImpl
[16.5K/  2%/ 597KB] 2.97MB          2   | | java.util.HashMap
[16.5K/  2%/ 597KB] 2.97MB          2   | | java.util.HashMap$Node[]
[16.5K/  2%/ 597KB] 2.69MB      13383   | | java.util.HashMap$Node
[ 3.2K/  0%/ 115KB]  486KB       2775   | | java.util.HashMap$Node
[  431/  0%/15.5KB] 35.2KB        380   | | java.util.HashMap$Node
[   51/  0%/1.83KB] 4.08KB         50   | | java.util.HashMap$Node
[    1/  0%/   36B]    80B          1 * | | java.util.HashMap$Node
[  238/  0%/8.56KB]  496MB          7   | \-com.intellij.openapi.wm.impl.ToolWindowsPane
[  149/  0%/5.36KB]  666KB          7   |   +-com.intellij.openapi.wm.impl.IdeFrameImpl
[  142/  0%/5.11KB]  627KB          6   |   | com.apple.laf.ScreenMenuBar
[   64/  0%/ 2.3KB]  312KB          6   |   | java.util.Hashtable
[   64/  0%/ 2.3KB]  311KB          6   |   | java.util.Hashtable$Entry[]
[   64/  0%/ 2.3KB]  310KB         64   |   | java.util.Hashtable$Entry
[   64/  0%/ 2.3KB]  307KB         64   |   | com.intellij.openapi.actionSystem.impl.ActionMenu
[   64/  0%/ 2.3KB] 24.5KB         64   |   | java.beans.PropertyChangeSupport
[   64/  0%/ 2.3KB] 23.0KB         64   |   | java.beans.PropertyChangeSupport$PropertyChangeListenerMap
[   64/  0%/ 2.3KB] 22.0KB         64   |   | java.util.HashMap
[   64/  0%/ 2.3KB] 17.4KB         64   |   | java.util.HashMap$Node[]
[   64/  0%/ 2.3KB] 8.44KB         64 * |   | java.util.HashMap$Node
[   72/  0%/2.59KB]  490MB          6   |   \-com.intellij.ui.components.JBPanel
[   38/  0%/1.36KB]  247KB          5   |     +-java.awt.BorderLayout
[   38/  0%/1.36KB]  238KB          5 ! |     | com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[   38/  0%/1.36KB]  217KB          5 ! |     | com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[   15/  0%/  540B] 81.8KB          5   |     | com.intellij.openapi.wm.impl.status.ProcessPopup
[   15/  0%/  540B] 67.4KB          5   |     | com.intellij.openapi.wm.impl.status.ProcessPopup$1
[   10/  0%/  360B] 40.7KB         10   |     | com.intellij.ui.components.JBScrollBar
[   10/  0%/  360B]  3.0KB         10   |     | java.beans.PropertyChangeSupport
[   10/  0%/  360B] 2.76KB         10   |     | java.beans.PropertyChangeSupport$PropertyChangeListenerMap
[   10/  0%/  360B]  2.6KB         10   |     | java.util.HashMap
[   10/  0%/  360B] 2.04KB         10   |     | java.util.HashMap$Node[]
[   10/  0%/  360B]   640B         10 * |     | java.util.HashMap$Node
[   34/  0%/1.22KB]  490MB          6   |     \-com.intellij.openapi.wm.impl.IdeRootPane$1
[   34/  0%/1.22KB]  490MB          6   |       com.intellij.openapi.wm.impl.IdeRootPane
[   28/  0%/ 1.0KB]  490MB          6   |       com.intellij.openapi.wm.impl.IdeGlassPaneImpl
[   28/  0%/ 1.0KB]  490MB          6   |       java.util.HashMap
[   28/  0%/ 1.0KB]  490MB          6   |       java.util.HashMap$Node[]
[   28/  0%/ 1.0KB]  490MB         18   |       java.util.HashMap$Node
[   10/  0%/  360B]  490MB          6   |       com.intellij.openapi.wm.impl.PaintersHelper
[   10/  0%/  360B]  490MB          6   |       java.util.LinkedHashMap
[   10/  0%/  360B]  490MB          6   |       java.util.LinkedHashMap$Entry
[   10/  0%/  360B]  490MB          6   |       com.intellij.openapi.wm.impl.PaintersHelper$MyImagePainter
[   10/  0%/  360B]  291MB          6   |       java.util.HashMap
[   10/  0%/  360B]  291MB          6   |       java.util.HashMap$Node[]
[   10/  0%/  360B]  291MB         10 * |       java.util.HashMap$Node
[24.1K/  4%/ 869KB] 2.55MB          6   \-com.intellij.openapi.extensions.impl.ExtensionPointImpl$$Lambda$424
[24.1K/  4%/ 868KB] 2.54MB          5     com.intellij.openapi.extensions.impl.ExtensionPointImpl$4
[23.0K/  4%/ 830KB] 2.11MB          1     com.intellij.codeInsight.template.impl.TemplateSettings$$Lambda$1090
[23.0K/  4%/ 830KB] 2.11MB          1     com.intellij.codeInsight.template.impl.TemplateSettings
[21.7K/  3%/ 783KB] 1.87MB          2     java.util.LinkedHashMap
[21.2K/  3%/ 764KB] 1.83MB          2     java.util.HashMap$Node[]
[21.2K/  3%/ 764KB] 1.81MB       1009     java.util.LinkedHashMap$Entry
[19.2K/  3%/ 692KB] 1.59MB       1008     com.intellij.codeInsight.template.impl.TemplateImpl
[19.2K/  3%/ 692KB] 1.16MB       1008     com.intellij.codeInsight.template.impl.TemplateContext
[19.2K/  3%/ 692KB] 1.15MB       1008     java.util.HashMap
[19.2K/  3%/ 692KB] 1.09MB       1008     java.util.HashMap$Node[]
[19.2K/  3%/ 692KB]  693KB      15751     java.util.HashMap$Node
[3.49K/  0%/ 125KB]  125KB       2930     java.util.HashMap$Node
[  567/  0%/20.4KB] 20.4KB        567 *   java.util.HashMap$Node
Root 3:
[32.9K/  5%/1.18MB] 10.2MB          1   ROOT: Static field: jdk.internal.jimage.ImageReader$SharedImageReader!1.OPEN_FILES
[32.9K/  5%/1.18MB] 10.2MB          1   java.util.HashMap
[32.9K/  5%/1.18MB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  5%/1.18MB] 10.2MB          1   java.util.HashMap$Node
[32.9K/  5%/1.18MB] 10.2MB          1   jdk.internal.jimage.ImageReader$SharedImageReader!1
[32.9K/  5%/1.18MB] 10.2MB          1   java.util.HashMap
[32.9K/  5%/1.18MB] 10.2MB          1   java.util.HashMap$Node[]
[32.9K/  5%/1.18MB] 9.68MB      25896   java.util.HashMap$Node
[7.07K/  1%/ 254KB] 2.08MB       5958   java.util.HashMap$Node
[1.11K/  0%/40.1KB]  322KB        981   java.util.HashMap$Node
[  134/  0%/4.82KB] 31.6KB        123   java.util.HashMap$Node
[   11/  0%/  396B] 1.54KB         10   java.util.HashMap$Node
[    1/  0%/   36B]   136B          1 * java.util.HashMap$Node
Root 4:
[32.9K/  5%/1.18MB] 24.6MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.ManagingFS$ManagingFSHolder.ourInstance
[32.9K/  5%/1.18MB] 24.6MB          1   com.intellij.openapi.vfs.newvfs.persistent.PersistentFSImpl
[32.9K/  5%/1.18MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap
[32.9K/  5%/1.18MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap$Node[]
[32.9K/  5%/1.18MB] 8.57MB          1   com.intellij.concurrency.ConcurrentHashMap$Node
[32.9K/  5%/1.18MB] 8.57MB          1   com.intellij.openapi.vfs.newvfs.impl.FsRoot
[32.9K/  5%/1.18MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtFileSystemImpl
[32.9K/  5%/1.18MB] 8.57MB          1   java.util.Collections$SynchronizedMap
[32.9K/  5%/1.18MB] 8.57MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap
[32.9K/  5%/1.18MB] 8.57MB          1   java.lang.Object[]
[32.9K/  5%/1.18MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtHandler
[32.9K/  5%/1.18MB] 8.57MB          1 ! com.intellij.reference.SoftReference (soft)
[32.9K/  5%/1.18MB] 8.57MB          1   java.util.HashMap
[32.9K/  5%/1.18MB] 8.57MB          1   java.util.HashMap$Node[]
[32.9K/  5%/1.18MB] 8.04MB      26016   java.util.HashMap$Node
[6.95K/  1%/ 250KB] 1.68MB       5887   java.util.HashMap$Node
[1.06K/  0%/38.3KB]  259KB        945   java.util.HashMap$Node
[  119/  0%/4.28KB] 28.8KB        112   java.util.HashMap$Node
[    7/  0%/  252B] 1.68KB          7 * java.util.HashMap$Node
Root 5:
[23.6K/  4%/ 853KB] 7.57MB          1   ROOT: Java Frame: com.intellij.openapi.actionSystem.ex.ActionUtil.performActionDumbAwareWithCallbacks(ActionUtil.java:267)
[23.6K/  4%/ 853KB] 7.57MB          1   com.intellij.openapi.actionSystem.impl.ActionManagerImpl
[20.8K/  3%/ 750KB] 7.08MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap
[20.8K/  3%/ 750KB] 6.82MB          1   java.lang.Object[]
[16.3K/  2%/ 588KB] 3.45MB         69   com.intellij.openapi.actionSystem.DefaultActionGroup
[15.7K/  2%/ 567KB] 2.99MB         47   com.intellij.openapi.actionSystem.Presentation
[15.7K/  2%/ 567KB] 2.98MB         47   com.intellij.openapi.actionSystem.impl.ActionManagerImpl$$Lambda$707
[15.7K/  2%/ 567KB] 2.97MB         47   java.util.PropertyResourceBundle
[15.7K/  2%/ 567KB] 2.97MB         47   java.util.HashMap
[15.7K/  2%/ 567KB] 2.97MB         47   java.util.HashMap$Node[]
[15.7K/  2%/ 567KB] 2.73MB      12134   java.util.HashMap$Node
[3.62K/  0%/ 130KB]  630KB       3039   java.util.HashMap$Node
[  589/  0%/21.2KB]  101KB        520   java.util.HashMap$Node
[   69/  0%/2.48KB] 11.4KB         61   java.util.HashMap$Node
[    8/  0%/  288B] 1.34KB          8 * java.util.HashMap$Node
Root 6:
[21.7K/  3%/ 783KB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[21.7K/  3%/ 783KB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[21.7K/  3%/ 783KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[21.7K/  3%/ 783KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[16.4K/  2%/ 592KB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[16.4K/  2%/ 592KB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[16.4K/  2%/ 592KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree
[16.4K/  2%/ 592KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[14.4K/  2%/ 520KB] 9.57MB          1   com.intellij.util.SmartList
[14.4K/  2%/ 520KB] 9.57MB          1   com.intellij.openapi.util.StaticGetter
[14.4K/  2%/ 520KB] 9.57MB          1   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[14.4K/  2%/ 520KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[14.4K/  2%/ 520KB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[14.4K/  2%/ 519KB] 9.54MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[14.2K/  2%/ 511KB] 7.93MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[14.2K/  2%/ 511KB] 7.92MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[14.1K/  2%/ 511KB] 7.92MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[14.1K/  2%/ 511KB] 7.92MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.6K/  2%/ 492KB] 5.94MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.6K/  2%/ 492KB] 5.94MB          1   com.intellij.debugger.ui.impl.watch.FieldDescriptorImpl
[13.6K/  2%/ 492KB] 5.93MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[13.6K/  2%/ 492KB] 5.93MB          1   com.jetbrains.jdi.VirtualMachineImpl
[13.6K/  2%/ 490KB] 2.52MB          2   java.util.HashMap
[13.6K/  2%/ 490KB] 2.52MB          2   java.util.HashMap$Node[]
[13.6K/  2%/ 490KB] 2.25MB      11256   java.util.HashMap$Node
[2.37K/  0%/85.3KB]  367KB       2103   java.util.HashMap$Node
[  267/  0%/9.61KB] 21.5KB        236   java.util.HashMap$Node
[   31/  0%/1.11KB] 2.48KB         31 * java.util.HashMap$Node
Root 7:
[20.7K/  3%/ 747KB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[20.7K/  3%/ 747KB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[20.7K/  3%/ 747KB] 36.0MB          1   java.util.HashMap
[20.7K/  3%/ 747KB] 36.0MB          1   java.util.HashMap$Node[]
[20.7K/  3%/ 747KB] 36.0MB          2   java.util.HashMap$Node
[20.7K/  3%/ 747KB] 36.0MB          1   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[20.7K/  3%/ 746KB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[17.8K/  3%/ 643KB] 28.0MB          1   com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[17.7K/  3%/ 638KB] 27.8MB          1   com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[17.7K/  3%/ 638KB] 27.8MB          1   com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[17.7K/  3%/ 638KB] 27.8MB          2   java.util.HashMap
[17.7K/  3%/ 638KB] 27.8MB          2   java.util.HashMap$Node[]
[17.7K/  3%/ 638KB] 27.8MB         12   java.util.HashMap$Node
[16.4K/  2%/ 591KB] 21.4MB          9   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[16.4K/  2%/ 591KB] 21.3MB          9   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[16.3K/  2%/ 589KB] 21.2MB          9   com.intellij.util.EventDispatcher
[16.3K/  2%/ 589KB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList
[16.3K/  2%/ 589KB] 21.2MB          9   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[16.3K/  2%/ 589KB] 21.2MB          9   java.lang.Object[]
[16.3K/  2%/ 589KB] 21.2MB          9   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[16.3K/  2%/ 589KB] 21.2MB          9   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[16.3K/  2%/ 589KB] 21.1MB          9 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[15.1K/  2%/ 545KB] 13.3MB          7   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[15.1K/  2%/ 545KB] 13.3MB          7 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[14.2K/  2%/ 514KB] 7.21MB          7 ! com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[13.8K/  2%/ 500KB] 6.43MB          7   com.intellij.xdebugger.impl.inline.InlineWatchesRootNode
[13.8K/  2%/ 500KB] 6.42MB          7 ! com.intellij.xdebugger.impl.ui.tree.XDebuggerTree (disposed)
[13.8K/  2%/ 498KB]  6.2MB          1   javax.swing.plaf.basic.BasicTreeUI$Handler
[13.8K/  2%/ 498KB]  6.2MB          1   javax.swing.tree.TreePath
[13.8K/  2%/ 498KB]  6.2MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.6K/  2%/ 491KB] 5.93MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.6K/  2%/ 491KB] 5.93MB          1   com.intellij.debugger.ui.impl.watch.ArrayElementDescriptorImpl
[13.6K/  2%/ 491KB] 5.92MB          1   com.jetbrains.jdi.ArrayReferenceImpl
[13.6K/  2%/ 491KB] 5.92MB          1   com.jetbrains.jdi.VirtualMachineImpl
[13.5K/  2%/ 489KB] 2.52MB          2   java.util.HashMap
[13.5K/  2%/ 489KB] 2.52MB          2   java.util.HashMap$Node[]
[13.5K/  2%/ 489KB] 2.25MB      11227   java.util.HashMap$Node
[2.35K/  0%/84.9KB]  366KB       2097   java.util.HashMap$Node
[  262/  0%/9.43KB] 21.0KB        231   java.util.HashMap$Node
[   31/  0%/1.11KB] 2.48KB         31 * java.util.HashMap$Node
Root 8:
[   26/  0%/  936B] 1.77MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.newline.LocalNewLineCompletionGetter.occurencesMap
[   26/  0%/  936B] 1.77MB          1   java.util.HashMap
[   26/  0%/  936B] 1.77MB          1   java.util.HashMap$Node[]
[   26/  0%/  936B] 1.77MB         26 * java.util.HashMap$Node
Root 9:
[    8/  0%/  288B]  414KB          1   ROOT: Class definition: com.intellij.spring.editor.SpringEditorNotificationPanel$1
[    8/  0%/  288B]  414KB          1   java.lang.Class
[    8/  0%/  288B]  413KB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[    8/  0%/  288B]  352KB          1   com.intellij.util.lang.ClassPath
[    8/  0%/  288B]   484B          1   java.util.HashMap
[    8/  0%/  288B]   428B          1   java.util.HashMap$Node[]
[    8/  0%/  288B]   288B          7   java.util.HashMap$Node
[    1/  0%/   36B]    36B          1 * java.util.HashMap$Node
Report for java.util.HashMap$Node created in 1.279 s

CLASS: com.intellij.util.zip.ImmutableZipEntry (489239 objects)
Root 1:
[ 124K/ 25%/4.97MB] 21.2MB          1   ROOT: Global JNI
[ 124K/ 25%/4.97MB] 21.2MB          1   com.intellij.util.lang.PathClassLoader
[ 124K/ 25%/4.97MB] 20.1MB          1   com.intellij.util.lang.ClassPath
[ 124K/ 25%/4.97MB] 19.9MB          1   java.util.ArrayList
[ 124K/ 25%/4.97MB] 19.9MB          1   java.lang.Object[]
[ 124K/ 25%/4.97MB] 19.9MB        210   com.intellij.util.lang.JarLoader
[ 124K/ 25%/4.97MB] 19.8MB        210   com.intellij.util.lang.ZipResourceFile
[ 124K/ 25%/4.97MB] 19.8MB        210   com.intellij.util.zip.ImmutableZipFile
[ 124K/ 25%/4.97MB] 17.8MB        210   com.intellij.util.zip.ImmutableZipEntry[]
[ 124K/ 25%/4.97MB] 16.8MB     124390 * com.intellij.util.zip.ImmutableZipEntry
Root 2:
[41.4K/  8%/1.65MB] 9.62MB          1   ROOT: Global JNI
[41.4K/  8%/1.65MB] 9.62MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[41.0K/  8%/1.64MB] 7.51MB          1   com.intellij.util.lang.ClassPath
[41.0K/  8%/1.64MB] 7.43MB          1   java.util.ArrayList
[41.0K/  8%/1.64MB] 7.43MB          1   java.lang.Object[]
[41.0K/  8%/1.64MB] 7.43MB         70   com.intellij.util.lang.JarLoader
[41.0K/  8%/1.64MB] 7.41MB         70   com.intellij.util.lang.ZipResourceFile
[41.0K/  8%/1.64MB] 7.41MB         70   com.intellij.util.zip.ImmutableZipFile
[41.0K/  8%/1.64MB] 6.73MB         70   com.intellij.util.zip.ImmutableZipEntry[]
[41.0K/  8%/1.64MB]  6.4MB      41079 * com.intellij.util.zip.ImmutableZipEntry
Root 3:
[39.0K/  7%/1.56MB] 7.06MB          1   ROOT: Class definition: org.jetbrains.plugins.gradle.model.ExternalSourceDirectorySet
[39.0K/  7%/1.56MB] 7.06MB          1   java.lang.Class
[39.0K/  7%/1.56MB] 7.06MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[39.0K/  7%/1.56MB] 7.02MB          1   com.intellij.util.lang.ClassPath
[39.0K/  7%/1.56MB] 6.96MB          1   java.util.ArrayList
[39.0K/  7%/1.56MB] 6.96MB          1   java.lang.Object[]
[39.0K/  7%/1.56MB] 6.96MB          6   com.intellij.util.lang.JarLoader
[39.0K/  7%/1.56MB] 6.96MB          6   com.intellij.util.lang.ZipResourceFile
[39.0K/  7%/1.56MB] 6.96MB          6   com.intellij.util.zip.ImmutableZipFile
[39.0K/  7%/1.56MB] 6.33MB          6   com.intellij.util.zip.ImmutableZipEntry[]
[39.0K/  7%/1.56MB] 6.02MB      39045 * com.intellij.util.zip.ImmutableZipEntry
Root 4:
[20.6K/  4%/ 824KB] 3.49MB          1   ROOT: Class definition: circlet.client.api.ProjectTeamArena
[20.6K/  4%/ 824KB] 3.49MB          1   java.lang.Class
[20.6K/  4%/ 824KB] 3.49MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.6K/  4%/ 824KB] 3.43MB          1   com.intellij.util.lang.ClassPath
[20.6K/  4%/ 824KB]  3.4MB          1   java.util.ArrayList
[20.6K/  4%/ 824KB]  3.4MB          1   java.lang.Object[]
[20.6K/  4%/ 824KB]  3.4MB         26   com.intellij.util.lang.JarLoader
[20.6K/  4%/ 824KB] 3.39MB         26   com.intellij.util.lang.ZipResourceFile
[20.6K/  4%/ 824KB] 3.39MB         26   com.intellij.util.zip.ImmutableZipFile
[20.6K/  4%/ 824KB] 3.06MB         26   com.intellij.util.zip.ImmutableZipEntry[]
[20.6K/  4%/ 824KB] 2.89MB      20602 * com.intellij.util.zip.ImmutableZipEntry
Root 5:
[20.3K/  4%/ 814KB] 3.79MB          1   ROOT: Class definition: com.intellij.codeInspection.bytecodeAnalysis.InOutInterpreter
[20.3K/  4%/ 814KB] 3.79MB          1   java.lang.Class
[20.3K/  4%/ 814KB] 3.79MB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[20.3K/  4%/ 814KB]  3.5MB          1   com.intellij.util.lang.ClassPath
[20.3K/  4%/ 814KB] 3.45MB          1   java.util.ArrayList
[20.3K/  4%/ 814KB] 3.45MB          1   java.lang.Object[]
[20.3K/  4%/ 814KB] 3.45MB         30   com.intellij.util.lang.JarLoader
[20.3K/  4%/ 814KB] 3.44MB         30   com.intellij.util.lang.ZipResourceFile
[20.3K/  4%/ 814KB] 3.44MB         30   com.intellij.util.zip.ImmutableZipFile
[20.3K/  4%/ 814KB] 3.11MB         30   com.intellij.util.zip.ImmutableZipEntry[]
[20.3K/  4%/ 814KB] 2.94MB      20356 * com.intellij.util.zip.ImmutableZipEntry
Root 6:
[  426/  0%/17.0KB] 75.0KB          1   ROOT: Class definition: com.intellij.freemarker.psi.injection.FtlConfigurationInjector
[  426/  0%/17.0KB] 75.0KB          1   java.lang.Class
[  426/  0%/17.0KB] 74.8KB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[  426/  0%/17.0KB] 70.5KB          1   com.intellij.util.lang.ClassPath
[  426/  0%/17.0KB] 69.4KB          1   java.util.ArrayList
[  426/  0%/17.0KB] 69.3KB          1   java.lang.Object[]
[  426/  0%/17.0KB] 69.2KB          1   com.intellij.util.lang.JarLoader
[  426/  0%/17.0KB] 69.0KB          1   com.intellij.util.lang.ZipResourceFile
[  426/  0%/17.0KB] 68.9KB          1   com.intellij.util.zip.ImmutableZipFile
[  426/  0%/17.0KB] 61.9KB          1   com.intellij.util.zip.ImmutableZipEntry[]
[  426/  0%/17.0KB] 58.4KB        426 * com.intellij.util.zip.ImmutableZipEntry
Root 7:
[    1/  0%/   40B]   780B          1   ROOT: Static field: com.codota.intellij.common.view.CodotaIcons.GITHUB_ICON
[    1/  0%/   40B]   780B          1   com.intellij.openapi.util.IconLoader$CachedImageIcon
[    1/  0%/   40B]   424B          1   com.intellij.openapi.util.IconLoader$ResolvedImageDataResolver
[    1/  0%/   40B]   400B          1   java.net.URL
[    1/  0%/   40B]   124B          1   com.intellij.util.lang.ZipResourceFile$MyURLStreamHandler
[    1/  0%/   40B]   100B          1 * com.intellij.util.zip.ImmutableZipEntry
Report for com.intellij.util.zip.ImmutableZipEntry created in 603.9 ms

CLASS: com.jetbrains.jdi.ClassTypeImpl (35168 objects)
Root 1:
[13.1K/ 37%/2.13MB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[13.1K/ 37%/2.13MB]  621MB          1   com.intellij.openapi.util.ObjectTree
[13.1K/ 37%/2.13MB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[13.1K/ 37%/2.13MB]  619MB          1   java.lang.Object[]
[13.1K/ 37%/2.13MB]  133MB          1   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[13.1K/ 37%/2.13MB]  133MB          1   com.intellij.openapi.util.Ref
[13.1K/ 37%/2.13MB]  133MB          1   com.intellij.openapi.wm.impl.ToolWindowImpl
[13.1K/ 37%/2.13MB]  133MB          1   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[13.1K/ 37%/2.13MB] 33.0MB          1 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[13.1K/ 37%/2.13MB] 26.0MB          1   com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[13.1K/ 37%/2.13MB] 26.0MB          1   java.util.concurrent.ConcurrentHashMap
[13.1K/ 37%/2.13MB] 26.0MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[13.1K/ 37%/2.13MB] 25.7MB          1   java.util.concurrent.ConcurrentHashMap$Node
[13.1K/ 37%/2.13MB] 25.7MB          1   com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[13.1K/ 37%/2.13MB] 25.7MB          1   com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[13.1K/ 37%/2.13MB] 25.7MB          1   com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[13.1K/ 37%/2.13MB] 25.7MB          1   com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[13.1K/ 37%/2.13MB] 25.7MB          1   java.util.HashMap
[13.1K/ 37%/2.13MB] 25.7MB          1   java.util.HashMap$Node[]
[13.1K/ 37%/2.13MB] 18.8MB          1   java.util.HashMap$Node
[13.1K/ 37%/2.13MB] 18.8MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[13.1K/ 37%/2.13MB] 18.8MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[13.1K/ 37%/2.13MB] 15.7MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[13.1K/ 37%/2.13MB] 15.7MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[13.1K/ 37%/2.13MB] 15.7MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[13.1K/ 37%/2.13MB] 15.7MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[13.1K/ 37%/2.13MB] 15.7MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[13.1K/ 37%/2.13MB]  7.0MB          1   com.intellij.debugger.engine.JavaValuePresentation
[13.1K/ 37%/2.13MB]  7.0MB          1   com.intellij.debugger.ui.impl.watch.UserExpressionDescriptorImpl
[13.1K/ 37%/2.13MB] 6.99MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[13.1K/ 37%/2.13MB] 6.99MB          1   com.jetbrains.jdi.VirtualMachineImpl
[13.1K/ 37%/2.13MB] 3.95MB          1   java.util.LinkedHashMap
[13.1K/ 37%/2.13MB] 3.95MB          1   java.util.HashMap$Node[]
[13.1K/ 37%/2.13MB] 3.16MB      13179   java.util.LinkedHashMap$Entry
[13.1K/ 37%/2.13MB] 2.26MB      13179 * com.jetbrains.jdi.ClassTypeImpl
Root 2:
[10.9K/ 31%/1.78MB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[10.9K/ 31%/1.78MB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[10.9K/ 31%/1.78MB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[10.9K/ 31%/1.78MB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[10.9K/ 31%/1.78MB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[10.9K/ 31%/1.78MB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[10.9K/ 31%/1.78MB] 11.6MB          1   com.intellij.openapi.editor.impl.RangeHighlighterTree
[10.9K/ 31%/1.78MB] 11.6MB          1   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[10.9K/ 31%/1.78MB] 9.57MB          1   com.intellij.util.SmartList
[10.9K/ 31%/1.78MB] 9.57MB          1   com.intellij.openapi.util.StaticGetter
[10.9K/ 31%/1.78MB] 9.57MB          1   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[10.9K/ 31%/1.78MB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[10.9K/ 31%/1.78MB] 9.57MB          1   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[10.9K/ 31%/1.78MB] 9.54MB          1   com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[10.9K/ 31%/1.78MB] 7.93MB          1 ! com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[10.9K/ 31%/1.78MB] 7.92MB          1   com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[10.9K/ 31%/1.78MB] 7.92MB          1 ! com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[10.9K/ 31%/1.78MB] 7.92MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[10.9K/ 31%/1.78MB] 5.94MB          1   com.intellij.debugger.engine.JavaValuePresentation
[10.9K/ 31%/1.78MB] 5.94MB          1   com.intellij.debugger.ui.impl.watch.FieldDescriptorImpl
[10.9K/ 31%/1.78MB] 5.93MB          1   com.jetbrains.jdi.ObjectReferenceImpl
[10.9K/ 31%/1.77MB] 5.93MB          1   com.jetbrains.jdi.VirtualMachineImpl
[10.9K/ 31%/1.77MB] 3.34MB          1   java.util.LinkedHashMap
[10.9K/ 31%/1.77MB] 3.34MB          1   java.util.HashMap$Node[]
[10.9K/ 31%/1.77MB]  2.6MB      10982   java.util.LinkedHashMap$Entry
[10.9K/ 31%/1.77MB] 1.85MB      10982 * com.jetbrains.jdi.ClassTypeImpl
Root 3:
[10.9K/ 31%/1.77MB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[10.9K/ 31%/1.77MB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[10.9K/ 31%/1.77MB] 36.0MB          1   java.util.HashMap
[10.9K/ 31%/1.77MB] 36.0MB          1   java.util.HashMap$Node[]
[10.9K/ 31%/1.77MB] 36.0MB          1   java.util.HashMap$Node
[10.9K/ 31%/1.77MB] 36.0MB          1   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[10.9K/ 31%/1.77MB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[10.9K/ 31%/1.77MB] 28.0MB          1   com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[10.9K/ 31%/1.77MB] 27.8MB          1   com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[10.9K/ 31%/1.77MB] 27.8MB          1   com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[10.9K/ 31%/1.77MB] 27.8MB          1   java.util.HashMap
[10.9K/ 31%/1.77MB] 27.8MB          1   java.util.HashMap$Node[]
[10.9K/ 31%/1.77MB] 7.66MB          1   java.util.HashMap$Node
[10.9K/ 31%/1.77MB] 7.66MB          1   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[10.9K/ 31%/1.77MB] 7.65MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[10.9K/ 31%/1.77MB] 7.63MB          1   com.intellij.util.EventDispatcher
[10.9K/ 31%/1.77MB] 7.63MB          1   com.intellij.util.containers.DisposableWrapperList
[10.9K/ 31%/1.77MB] 7.63MB          1   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[10.9K/ 31%/1.77MB] 7.63MB          1   java.lang.Object[]
[10.9K/ 31%/1.77MB] 7.63MB          1   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[10.9K/ 31%/1.77MB] 7.63MB          1   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[10.9K/ 31%/1.77MB] 7.63MB          1 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[10.9K/ 31%/1.77MB] 6.95MB          1   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[10.9K/ 31%/1.77MB] 6.95MB          1 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[10.9K/ 31%/1.77MB] 6.33MB          1 ! com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[10.9K/ 31%/1.77MB] 6.23MB          1   com.intellij.xdebugger.impl.inline.InlineWatchesRootNode
[10.9K/ 31%/1.77MB] 6.23MB          1 ! com.intellij.xdebugger.impl.ui.tree.XDebuggerTree (disposed)
[10.9K/ 31%/1.77MB]  6.2MB          1   javax.swing.plaf.basic.BasicTreeUI$Handler
[10.9K/ 31%/1.77MB]  6.2MB          1   javax.swing.tree.TreePath
[10.9K/ 31%/1.77MB]  6.2MB          1   com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[10.9K/ 31%/1.77MB] 5.93MB          1   com.intellij.debugger.engine.JavaValuePresentation
[10.9K/ 31%/1.77MB] 5.93MB          1   com.intellij.debugger.ui.impl.watch.ArrayElementDescriptorImpl
[10.9K/ 31%/1.77MB] 5.92MB          1   com.jetbrains.jdi.ArrayReferenceImpl
[10.9K/ 31%/1.77MB] 5.92MB          1   com.jetbrains.jdi.VirtualMachineImpl
[10.9K/ 31%/1.77MB] 3.34MB          1   java.util.LinkedHashMap
[10.9K/ 31%/1.77MB] 3.34MB          1   java.util.HashMap$Node[]
[10.9K/ 31%/1.77MB] 2.59MB      10969   java.util.LinkedHashMap$Entry
[10.9K/ 31%/1.77MB] 1.85MB      10969 * com.jetbrains.jdi.ClassTypeImpl
Report for com.jetbrains.jdi.ClassTypeImpl created in 110.0 ms

CLASS: org.jdom.Attribute (63698 objects)
Root 1:
[45.0K/ 70%/ 2.2MB] 22.6MB          1   ROOT: Static field: com.intellij.ide.plugins.PluginManagerCore.ourPlugins
[45.0K/ 70%/ 2.2MB] 22.6MB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl[]
[45.0K/ 70%/ 2.2MB] 18.7MB        152   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[33.1K/ 52%/1.62MB] 6.77MB        227   +-com.intellij.ide.plugins.ContainerDescriptor
[33.1K/ 52%/1.62MB]  5.7MB        227   | java.util.LinkedHashMap
[29.1K/ 45%/1.42MB] 4.77MB        126   | java.util.HashMap$Node[]
[29.1K/ 45%/1.42MB] 4.59MB       2752   | java.util.LinkedHashMap$Entry
[23.4K/ 36%/1.15MB] 3.34MB       2747   | java.util.ArrayList
[23.4K/ 36%/1.15MB] 3.28MB       2747   | java.lang.Object[]
[23.4K/ 36%/1.15MB]  3.0MB       7625   | org.jdom.Element
[23.1K/ 36%/1.13MB]  2.1MB       7625   | org.jdom.AttributeList
[23.1K/ 36%/1.13MB] 1.86MB       7625   | org.jdom.Attribute[]
[23.1K/ 36%/1.13MB] 1.43MB      23197 * | org.jdom.Attribute
[11.8K/ 18%/ 582KB] 2.43MB        158   \-java.util.ArrayList
[11.8K/ 18%/ 582KB] 2.43MB        158     java.lang.Object[]
[10.3K/ 16%/ 508KB] 1.85MB       1358     org.jdom.Element
[7.36K/ 11%/ 360KB] 1.36MB        861     org.jdom.ContentList
[7.36K/ 11%/ 360KB] 1.33MB        861     org.jdom.Content[]
[7.36K/ 11%/ 360KB] 1.21MB       3481     org.jdom.Element
[6.29K/  9%/ 308KB]  671KB       3481     org.jdom.AttributeList
[6.29K/  9%/ 308KB]  559KB       3481     org.jdom.Attribute[]
[6.29K/  9%/ 308KB]  404KB       6293 *   org.jdom.Attribute
Root 2:
[9.47K/ 14%/ 464KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[9.47K/ 14%/ 464KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[9.47K/ 14%/ 464KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[9.47K/ 14%/ 464KB]  619MB          1   java.lang.Object[]
[9.14K/ 14%/ 447KB]  494MB          6   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[9.14K/ 14%/ 447KB]  494MB          6   com.intellij.openapi.util.Ref
[9.14K/ 14%/ 447KB]  494MB          6   com.intellij.openapi.wm.impl.ToolWindowImpl
[9.14K/ 14%/ 447KB]  494MB          6   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[9.11K/ 14%/ 446KB] 48.5MB          5 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[9.11K/ 14%/ 446KB] 9.47MB          5   com.intellij.util.concurrency.SynchronizedClearableLazy
[9.11K/ 14%/ 446KB] 9.47MB          5   java.util.concurrent.atomic.AtomicReference
[9.11K/ 14%/ 446KB] 9.47MB          5   com.intellij.configurationScript.providers.MyProjectStore
[9.11K/ 14%/ 446KB] 3.96MB          5   com.intellij.configurationStore.ProjectStateStorageManager
[9.11K/ 14%/ 446KB] 3.85MB          5   java.util.HashMap
[9.11K/ 14%/ 446KB] 3.85MB          5   java.util.HashMap$Node[]
[9.11K/ 14%/ 446KB] 3.52MB          8   java.util.HashMap$Node
[9.11K/ 14%/ 446KB] 3.52MB          8   com.intellij.configurationStore.StateStorageManagerImpl$createDirectoryBasedStorage$1
[9.11K/ 14%/ 446KB] 3.52MB          8   java.util.concurrent.atomic.AtomicReference
[9.11K/ 14%/ 446KB] 3.52MB          8   com.intellij.configurationStore.StateMap
[9.11K/ 14%/ 446KB] 3.38MB          8   java.util.concurrent.atomic.AtomicReferenceArray
[9.11K/ 14%/ 446KB] 3.38MB          8   java.lang.Object[]
[9.11K/ 14%/ 446KB] 3.37MB       1454   org.jdom.Element
[7.65K/ 12%/ 374KB] 2.97MB       1454   org.jdom.ContentList
[7.65K/ 12%/ 374KB] 2.91MB       1454   org.jdom.Content[]
[7.65K/ 12%/ 374KB] 2.84MB       4356   org.jdom.Element
[7.63K/ 11%/ 374KB] 2.56MB       4350   org.jdom.ContentList
[7.63K/ 11%/ 374KB] 2.38MB       4350   org.jdom.Content[]
[7.63K/ 11%/ 374KB] 2.19MB       4356   org.jdom.Element
[4.36K/  6%/ 214KB] 1.17MB       4356   org.jdom.AttributeList
[4.36K/  6%/ 214KB] 1.03MB       4356   org.jdom.Attribute[]
[4.36K/  6%/ 214KB]  844KB       4368 * org.jdom.Attribute
Root 3:
[    7/  0%/  343B] 1.21MB          1   ROOT: Class definition: com.intellij.lang.javascript.nashorn.resolve.NashornJSScopeOptimizer
[    7/  0%/  343B] 1.21MB          1   java.lang.Class
[    7/  0%/  343B] 1.21MB          1   com.intellij.ide.plugins.SubPluginClassLoader
[    7/  0%/  343B]  3.3KB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[    7/  0%/  343B] 2.87KB          1   com.intellij.ide.plugins.ContainerDescriptor
[    7/  0%/  343B] 2.82KB          1   java.util.LinkedHashMap
[    7/  0%/  343B] 2.57KB          2   java.util.LinkedHashMap$Entry
[    5/  0%/  245B]  1.3KB          2   java.util.LinkedHashMap$Entry
[    4/  0%/  196B]   800B          2   java.util.ArrayList
[    4/  0%/  196B]   752B          2   java.lang.Object[]
[    4/  0%/  196B]   568B          2   org.jdom.Element
[    4/  0%/  196B]   360B          2   org.jdom.AttributeList
[    4/  0%/  196B]   296B          2   org.jdom.Attribute[]
[    4/  0%/  196B]   208B          4 * org.jdom.Attribute
Root 4:
[    2/  0%/   98B] 75.0KB          1   ROOT: Class definition: com.intellij.freemarker.psi.injection.FtlConfigurationInjector
[    2/  0%/   98B] 75.0KB          1   java.lang.Class
[    2/  0%/   98B] 74.8KB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[    2/  0%/   98B] 1.98KB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[    2/  0%/   98B] 1.46KB          1   com.intellij.ide.plugins.ContainerDescriptor
[    2/  0%/   98B] 1.41KB          1   java.util.LinkedHashMap
[    2/  0%/   98B] 1.18KB          2   java.util.LinkedHashMap$Entry
[    2/  0%/   98B]   844B          2   java.util.ArrayList
[    2/  0%/   98B]   796B          2   java.lang.Object[]
[    2/  0%/   98B]   612B          2   org.jdom.Element
[    2/  0%/   98B]   352B          2   org.jdom.AttributeList
[    2/  0%/   98B]   288B          2   org.jdom.Attribute[]
[    2/  0%/   98B]   200B          2 * org.jdom.Attribute
Report for org.jdom.Attribute created in 153.5 ms

CLASS: net.sourceforge.pmd.lang.java.ast.Token (58759 objects)
Ignored 42 too-deep objects
Root 1:
[52.6K/ 89%/2.74MB] 10.1MB          1   ROOT: Static field: com.alibaba.p3c.idea.pmd.SourceCodeProcessor.userTriggerNodeCache
[52.6K/ 89%/2.74MB] 10.1MB          1   com.google.common.cache.LocalCache$LocalManualCache
[52.6K/ 89%/2.74MB] 10.1MB          1   com.google.common.cache.LocalCache
[52.6K/ 89%/2.74MB] 10.1MB          1   com.google.common.cache.LocalCache$Segment[]
[52.6K/ 89%/2.74MB] 10.1MB         11   com.google.common.cache.LocalCache$Segment
[52.6K/ 89%/2.74MB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue
[52.6K/ 89%/2.74MB] 10.1MB         11   com.google.common.cache.LocalCache$AccessQueue$1
[52.6K/ 89%/2.74MB] 10.1MB         11   com.google.common.cache.LocalCache$StrongAccessWriteEntry
[52.6K/ 89%/2.74MB] 10.1MB         11   com.google.common.cache.LocalCache$StrongValueReference
[52.6K/ 89%/2.74MB] 10.1MB         11   net.sourceforge.pmd.lang.java.ast.ASTCompilationUnit
[51.7K/ 88%/2.69MB] 9.19MB         11   net.sourceforge.pmd.lang.ast.Node[]
[48.5K/ 82%/2.52MB] 8.87MB         11   net.sourceforge.pmd.lang.java.ast.ASTTypeDeclaration
[48.4K/ 82%/2.51MB] 8.86MB         11   net.sourceforge.pmd.lang.ast.Node[]
[48.3K/ 82%/2.51MB] 8.84MB         11   net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceDeclaration
[35.7K/ 60%/1.85MB] 6.56MB          9   +-net.sourceforge.pmd.lang.ast.Node[]
[35.7K/ 60%/1.85MB] 6.55MB          9   | net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBody
[35.6K/ 60%/1.85MB] 6.55MB          9   | net.sourceforge.pmd.lang.ast.Node[]
[35.6K/ 60%/1.85MB] 6.53MB        253   | net.sourceforge.pmd.lang.java.ast.ASTClassOrInterfaceBodyDeclaration
[30.6K/ 52%/1.59MB] 6.03MB        207   | net.sourceforge.pmd.lang.ast.Node[]
[26.1K/ 44%/1.36MB]  5.3MB        131   | net.sourceforge.pmd.lang.java.ast.ASTMethodDeclaration
[15.9K/ 27%/ 830KB]  2.6MB        122   | +-net.sourceforge.pmd.lang.ast.Node[]
[14.3K/ 24%/ 748KB] 2.21MB        121   | | net.sourceforge.pmd.lang.java.ast.ASTBlock
[12.2K/ 20%/ 635KB] 2.01MB        119   | | net.sourceforge.pmd.lang.ast.Node[]
[12.2K/ 20%/ 635KB]  2.0MB        524   | | net.sourceforge.pmd.lang.java.ast.ASTBlockStatement
[ 8.8K/ 14%/ 457KB]  752KB        913   | | net.sourceforge.pmd.lang.java.ast.Token
[7.88K/ 13%/ 410KB]  695KB        910   | | net.sourceforge.pmd.lang.java.ast.Token
[6.97K/ 11%/ 362KB]  622KB       1077   | | net.sourceforge.pmd.lang.java.ast.Token
[5.86K/  9%/ 305KB]  518KB        863   | | net.sourceforge.pmd.lang.java.ast.Token
[4.97K/  8%/ 258KB]  445KB        874   | | net.sourceforge.pmd.lang.java.ast.Token
[4.09K/  6%/ 212KB]  365KB        811   | | net.sourceforge.pmd.lang.java.ast.Token
[3.28K/  5%/ 170KB]  295KB        661   | | net.sourceforge.pmd.lang.java.ast.Token
[2.59K/  4%/ 135KB]  233KB        624   | | net.sourceforge.pmd.lang.java.ast.Token
[1.97K/  3%/ 102KB]  178KB        589   | | net.sourceforge.pmd.lang.java.ast.Token
[1.38K/  2%/71.9KB]  123KB        595   | | net.sourceforge.pmd.lang.java.ast.Token
[  789/  1%/41.0KB] 72.1KB        135   | | net.sourceforge.pmd.lang.java.ast.Token
[  650/  1%/33.8KB] 59.2KB         86   | | net.sourceforge.pmd.lang.java.ast.Token
[  564/  0%/29.3KB] 51.6KB         82   | | net.sourceforge.pmd.lang.java.ast.Token
[  482/  0%/25.0KB] 44.2KB         82   | | net.sourceforge.pmd.lang.java.ast.Token
[  400/  0%/20.8KB] 36.8KB         78   | | net.sourceforge.pmd.lang.java.ast.Token
[  322/  0%/16.7KB] 29.3KB         75   | | net.sourceforge.pmd.lang.java.ast.Token
[  236/  0%/12.2KB] 21.6KB         64   | | net.sourceforge.pmd.lang.java.ast.Token
[  172/  0%/8.94KB] 15.7KB         63   | | net.sourceforge.pmd.lang.java.ast.Token
[  109/  0%/5.66KB] 10.0KB         62   | | net.sourceforge.pmd.lang.java.ast.Token
[   47/  0%/2.44KB] 4.32KB         26   | | net.sourceforge.pmd.lang.java.ast.Token
[   21/  0%/1.09KB] 1.93KB          9   | | net.sourceforge.pmd.lang.java.ast.Token
[   12/  0%/  624B]  1.1KB          2   | | net.sourceforge.pmd.lang.java.ast.Token
[   10/  0%/  520B]   920B          2   | | net.sourceforge.pmd.lang.java.ast.Token
[    8/  0%/  416B]   736B          2   | | net.sourceforge.pmd.lang.java.ast.Token
[    6/  0%/  312B]   552B          2   | | net.sourceforge.pmd.lang.java.ast.Token
[    4/  0%/  208B]   368B          1   | | net.sourceforge.pmd.lang.java.ast.Token
[    3/  0%/  156B]   276B          1   | | net.sourceforge.pmd.lang.java.ast.Token
[    2/  0%/  104B]   184B          1   | | net.sourceforge.pmd.lang.java.ast.Token
[    1/  0%/   52B]    92B          1 * | | net.sourceforge.pmd.lang.java.ast.Token
[8.47K/ 14%/ 440KB] 2.17MB         96   | \-net.sourceforge.pmd.lang.java.symboltable.MethodScope
[8.47K/ 14%/ 440KB] 2.16MB         96   |   java.util.LinkedHashMap
[8.47K/ 14%/ 440KB] 2.14MB         96   |   java.util.LinkedHashMap$Entry
[8.47K/ 14%/ 440KB] 2.13MB         96   |   java.util.LinkedHashMap
[6.93K/ 11%/ 360KB] 1.67MB        163   |   java.util.LinkedHashMap$Entry
[4.55K/  7%/ 236KB]  999KB        145   |   java.util.ArrayList
[4.55K/  7%/ 236KB]  996KB        145   |   java.lang.Object[]
[4.55K/  7%/ 236KB]  892KB        284   |   net.sourceforge.pmd.lang.java.symboltable.JavaNameOccurrence
[4.52K/  7%/ 235KB]  847KB        284   |   net.sourceforge.pmd.lang.java.ast.ASTName
[2.63K/  4%/ 136KB]  217KB        430   |   net.sourceforge.pmd.lang.java.ast.Token
[ 2.2K/  3%/ 114KB]  174KB        591   |   net.sourceforge.pmd.lang.java.ast.Token
[1.61K/  2%/83.7KB]  136KB        247   |   net.sourceforge.pmd.lang.java.ast.Token
[1.36K/  2%/70.9KB]  117KB        184   |   net.sourceforge.pmd.lang.java.ast.Token
[1.18K/  2%/61.3KB]  103KB        153   |   net.sourceforge.pmd.lang.java.ast.Token
[1.02K/  1%/53.4KB] 90.4KB        130   |   net.sourceforge.pmd.lang.java.ast.Token
[  887/  1%/46.1KB] 79.0KB        110   |   net.sourceforge.pmd.lang.java.ast.Token
[  777/  1%/40.4KB] 69.9KB         96   |   net.sourceforge.pmd.lang.java.ast.Token
[  681/  1%/35.4KB] 61.4KB         89   |   net.sourceforge.pmd.lang.java.ast.Token
[  592/  1%/30.7KB] 53.5KB         83   |   net.sourceforge.pmd.lang.java.ast.Token
[  509/  0%/26.4KB] 46.1KB         74   |   net.sourceforge.pmd.lang.java.ast.Token
[  435/  0%/22.6KB] 39.3KB         70   |   net.sourceforge.pmd.lang.java.ast.Token
[  365/  0%/18.9KB] 33.0KB         70   |   net.sourceforge.pmd.lang.java.ast.Token
[  295/  0%/15.3KB] 26.6KB         70   |   net.sourceforge.pmd.lang.java.ast.Token
[  225/  0%/11.7KB] 20.3KB         32   |   net.sourceforge.pmd.lang.java.ast.Token
[  193/  0%/10.0KB] 17.4KB         31   |   net.sourceforge.pmd.lang.java.ast.Token
[  162/  0%/8.42KB] 14.6KB         30   |   net.sourceforge.pmd.lang.java.ast.Token
[  132/  0%/6.86KB] 11.9KB         27   |   net.sourceforge.pmd.lang.java.ast.Token
[  105/  0%/5.46KB] 9.54KB         14   |   net.sourceforge.pmd.lang.java.ast.Token
[   91/  0%/4.73KB] 8.29KB         14   |   net.sourceforge.pmd.lang.java.ast.Token
[   77/  0%/ 4.0KB] 7.04KB         12   |   net.sourceforge.pmd.lang.java.ast.Token
[   65/  0%/3.38KB] 5.94KB         11   |   net.sourceforge.pmd.lang.java.ast.Token
[   54/  0%/ 2.8KB] 4.96KB          7   |   net.sourceforge.pmd.lang.java.ast.Token
[   47/  0%/2.44KB] 4.32KB          6   |   net.sourceforge.pmd.lang.java.ast.Token
[   41/  0%/2.13KB] 3.77KB          6   |   net.sourceforge.pmd.lang.java.ast.Token
[   35/  0%/1.82KB] 3.22KB          6   |   net.sourceforge.pmd.lang.java.ast.Token
[   29/  0%/ 1.5KB] 2.66KB          4   |   net.sourceforge.pmd.lang.java.ast.Token
[   25/  0%/ 1.3KB]  2.3KB          3   |   net.sourceforge.pmd.lang.java.ast.Token
[   22/  0%/1.14KB] 2.02KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   20/  0%/1.04KB] 1.84KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   18/  0%/  936B] 1.65KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   16/  0%/  832B] 1.47KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   14/  0%/  728B] 1.28KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   12/  0%/  624B]  1.1KB          2   |   net.sourceforge.pmd.lang.java.ast.Token
[   10/  0%/  520B]   920B          2   |   net.sourceforge.pmd.lang.java.ast.Token
[    8/  0%/  416B]   736B          1   |   net.sourceforge.pmd.lang.java.ast.Token
[    7/  0%/  364B]   644B          1   |   net.sourceforge.pmd.lang.java.ast.Token
[    6/  0%/  312B]   552B          1   |   net.sourceforge.pmd.lang.java.ast.Token
[    5/  0%/  260B]   460B          1   |   net.sourceforge.pmd.lang.java.ast.Token
[...removed 25 lines...]
[  397/  0%/20.6KB] 35.5KB         42     net.sourceforge.pmd.lang.java.ast.Token
[  355/  0%/18.4KB] 31.9KB         37     net.sourceforge.pmd.lang.java.ast.Token
[  318/  0%/16.5KB] 28.7KB         33     net.sourceforge.pmd.lang.java.ast.Token
[  285/  0%/14.8KB] 25.8KB         30     net.sourceforge.pmd.lang.java.ast.Token
[  255/  0%/13.2KB] 23.1KB         26     net.sourceforge.pmd.lang.java.ast.Token
[  229/  0%/11.9KB] 20.8KB         24     net.sourceforge.pmd.lang.java.ast.Token
[  205/  0%/10.6KB] 18.6KB         25     net.sourceforge.pmd.lang.java.ast.Token
[  180/  0%/9.36KB] 16.4KB         24     net.sourceforge.pmd.lang.java.ast.Token
[  156/  0%/8.11KB] 14.1KB         23     net.sourceforge.pmd.lang.java.ast.Token
[  133/  0%/6.91KB] 12.1KB         21     net.sourceforge.pmd.lang.java.ast.Token
[  112/  0%/5.82KB] 10.1KB         21     net.sourceforge.pmd.lang.java.ast.Token
[   91/  0%/4.73KB] 8.37KB         15     net.sourceforge.pmd.lang.java.ast.Token
[   76/  0%/3.95KB] 6.99KB         14     net.sourceforge.pmd.lang.java.ast.Token
[   62/  0%/3.22KB]  5.7KB         14     net.sourceforge.pmd.lang.java.ast.Token
[   48/  0%/2.49KB] 4.41KB         14     net.sourceforge.pmd.lang.java.ast.Token
[   34/  0%/1.76KB] 3.12KB          4     net.sourceforge.pmd.lang.java.ast.Token
[   30/  0%/1.56KB] 2.76KB          4     net.sourceforge.pmd.lang.java.ast.Token
[   26/  0%/1.35KB] 2.39KB          4     net.sourceforge.pmd.lang.java.ast.Token
[   22/  0%/1.14KB] 2.02KB          4     net.sourceforge.pmd.lang.java.ast.Token
[   18/  0%/  936B] 1.65KB          3     net.sourceforge.pmd.lang.java.ast.Token
[   15/  0%/  780B] 1.38KB          3     net.sourceforge.pmd.lang.java.ast.Token
[   12/  0%/  624B]  1.1KB          3     net.sourceforge.pmd.lang.java.ast.Token
[    9/  0%/  468B]   828B          3     net.sourceforge.pmd.lang.java.ast.Token
[    6/  0%/  312B]   552B          3     net.sourceforge.pmd.lang.java.ast.Token
[    3/  0%/  156B]   276B          3 *   net.sourceforge.pmd.lang.java.ast.Token
Root 2:
[6.01K/ 10%/ 312KB] 1.34MB          1   ROOT: Static field: com.alibaba.p3c.idea.inspection.AliLocalInspectionToolProvider.ruleInfoMap
[6.01K/ 10%/ 312KB] 1.34MB          1   java.util.HashMap
[6.01K/ 10%/ 312KB] 1.34MB          1   java.util.HashMap$Node[]
[6.01K/ 10%/ 312KB] 1.17MB          1   java.util.HashMap$Node
[6.01K/ 10%/ 312KB] 1.17MB          1   com.alibaba.p3c.idea.inspection.AliLocalInspectionToolProvider$RuleInfo
[6.01K/ 10%/ 312KB] 1.17MB          1   net.sourceforge.pmd.lang.rule.RuleReference
[6.01K/ 10%/ 312KB] 1.17MB          1   com.alibaba.p3c.pmd.lang.java.rule.other.MethodTooLongRule
[6.01K/ 10%/ 312KB] 1.17MB          1   java.util.TreeMap
[6.01K/ 10%/ 312KB] 1.17MB          1   java.util.TreeMap$Entry
[5.37K/  9%/ 279KB] 1.02MB          2   java.util.TreeMap$Entry
[5.19K/  8%/ 270KB]  993KB          4   java.util.TreeMap$Entry
[3.97K/  6%/ 206KB]  756KB          8   java.util.TreeMap$Entry
[ 3.5K/  5%/ 182KB]  654KB         16   java.util.TreeMap$Entry
[2.85K/  4%/ 148KB]  553KB         32   java.util.TreeMap$Entry
[2.22K/  3%/ 115KB]  437KB         59   java.util.TreeMap$Entry
[1.41K/  2%/73.6KB]  285KB         30   java.util.TreeMap$Entry
[  787/  1%/40.9KB]  161KB         25   java.util.TreeMap$Entry
[  406/  0%/21.1KB] 86.0KB         24   net.sourceforge.pmd.lang.java.ast.ASTExpression
[  215/  0%/11.1KB] 17.4KB         34   net.sourceforge.pmd.lang.java.ast.Token
[  181/  0%/9.41KB] 14.5KB         43   net.sourceforge.pmd.lang.java.ast.Token
[  138/  0%/7.17KB] 11.6KB         26   net.sourceforge.pmd.lang.java.ast.Token
[  112/  0%/5.82KB] 9.65KB         20   net.sourceforge.pmd.lang.java.ast.Token
[   92/  0%/4.78KB] 8.25KB         12   net.sourceforge.pmd.lang.java.ast.Token
[   80/  0%/4.16KB] 7.26KB         11   net.sourceforge.pmd.lang.java.ast.Token
[   69/  0%/3.58KB] 6.26KB          9   net.sourceforge.pmd.lang.java.ast.Token
[   60/  0%/3.12KB] 5.46KB          8   net.sourceforge.pmd.lang.java.ast.Token
[   52/  0%/ 2.7KB] 4.74KB          8   net.sourceforge.pmd.lang.java.ast.Token
[   44/  0%/2.28KB] 4.04KB          5   net.sourceforge.pmd.lang.java.ast.Token
[   39/  0%/2.02KB] 3.58KB          5   net.sourceforge.pmd.lang.java.ast.Token
[   34/  0%/1.76KB] 3.12KB          5   net.sourceforge.pmd.lang.java.ast.Token
[   29/  0%/ 1.5KB] 2.66KB          3   net.sourceforge.pmd.lang.java.ast.Token
[   26/  0%/1.35KB] 2.39KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   24/  0%/1.24KB]  2.2KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   22/  0%/1.14KB] 2.02KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   20/  0%/1.04KB] 1.84KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   18/  0%/  936B] 1.65KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   16/  0%/  832B] 1.47KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   14/  0%/  728B] 1.28KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   12/  0%/  624B]  1.1KB          2   net.sourceforge.pmd.lang.java.ast.Token
[   10/  0%/  520B]   920B          2   net.sourceforge.pmd.lang.java.ast.Token
[    8/  0%/  416B]   736B          2   net.sourceforge.pmd.lang.java.ast.Token
[    6/  0%/  312B]   552B          2   net.sourceforge.pmd.lang.java.ast.Token
[    4/  0%/  208B]   368B          1   net.sourceforge.pmd.lang.java.ast.Token
[    3/  0%/  156B]   276B          1   net.sourceforge.pmd.lang.java.ast.Token
[    2/  0%/  104B]   184B          1   net.sourceforge.pmd.lang.java.ast.Token
[    1/  0%/   52B]    92B          1 * net.sourceforge.pmd.lang.java.ast.Token
Report for net.sourceforge.pmd.lang.java.ast.Token created in 172.4 ms

CLASS: org.jdom.Element (41262 objects)
Root 1:
[20.3K/ 49%/ 1.3MB] 22.6MB          1   ROOT: Static field: com.intellij.ide.plugins.PluginManagerCore.ourPlugins
[20.3K/ 49%/ 1.3MB] 22.6MB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl[]
[20.3K/ 49%/ 1.3MB] 18.8MB        153   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[13.2K/ 32%/ 847KB] 6.79MB        228   +-com.intellij.ide.plugins.ContainerDescriptor
[13.2K/ 32%/ 845KB] 5.73MB        228   | java.util.LinkedHashMap
[10.9K/ 26%/ 698KB] 4.77MB        126   | java.util.HashMap$Node[]
[10.9K/ 26%/ 698KB] 4.69MB       2763   | java.util.LinkedHashMap$Entry
[8.46K/ 20%/ 541KB] 3.46MB       2763   | java.util.ArrayList
[8.46K/ 20%/ 541KB]  3.4MB       2763   | java.lang.Object[]
[8.46K/ 20%/ 541KB] 3.12MB       7842   | org.jdom.Element
[  620/  1%/39.6KB]  157KB        288   | org.jdom.ContentList
[  620/  1%/39.6KB]  146KB        288   | org.jdom.Content[]
[  620/  1%/39.6KB]  133KB        584   | org.jdom.Element
[   36/  0%/ 2.3KB] 10.7KB         19   | org.jdom.ContentList
[   36/  0%/ 2.3KB] 9.94KB         19   | org.jdom.Content[]
[   36/  0%/ 2.3KB] 9.02KB         36 * | org.jdom.Element
[7.07K/ 17%/ 453KB] 2.43MB        158   \-java.util.ArrayList
[7.07K/ 17%/ 453KB] 2.43MB        158     java.lang.Object[]
[6.29K/ 15%/ 403KB] 1.85MB       1358     org.jdom.Element
[4.57K/ 11%/ 292KB] 1.36MB        861     org.jdom.ContentList
[4.57K/ 11%/ 292KB] 1.33MB        861     org.jdom.Content[]
[4.57K/ 11%/ 292KB] 1.27MB       4024     org.jdom.Element
[  551/  1%/35.2KB]  189KB        154     org.jdom.ContentList
[  551/  1%/35.2KB]  182KB        154     org.jdom.Content[]
[  551/  1%/35.2KB]  173KB        522     org.jdom.Element
[   29/  0%/1.85KB] 11.3KB         19     org.jdom.ContentList
[   29/  0%/1.85KB] 10.5KB         19     org.jdom.Content[]
[   29/  0%/1.85KB] 9.74KB         29 *   org.jdom.Element
Root 2:
[12.7K/ 30%/ 816KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[12.7K/ 30%/ 816KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[12.7K/ 30%/ 816KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[12.7K/ 30%/ 816KB]  619MB          1   java.lang.Object[]
[12.1K/ 29%/ 776KB]  494MB          6   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[12.1K/ 29%/ 776KB]  494MB          6   com.intellij.openapi.util.Ref
[12.1K/ 29%/ 776KB]  494MB          6   com.intellij.openapi.wm.impl.ToolWindowImpl
[12.1K/ 29%/ 776KB]  494MB          6   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[12.1K/ 29%/ 774KB] 48.5MB          5 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[12.1K/ 29%/ 774KB] 9.47MB          5   com.intellij.util.concurrency.SynchronizedClearableLazy
[12.1K/ 29%/ 774KB] 9.47MB          5   java.util.concurrent.atomic.AtomicReference
[12.1K/ 29%/ 774KB] 9.47MB          5   com.intellij.configurationScript.providers.MyProjectStore
[11.2K/ 27%/ 722KB] 3.96MB          5   com.intellij.configurationStore.ProjectStateStorageManager
[11.2K/ 27%/ 722KB] 3.85MB          5   java.util.HashMap
[11.2K/ 27%/ 722KB] 3.85MB          5   java.util.HashMap$Node[]
[11.2K/ 27%/ 722KB] 3.52MB          8   java.util.HashMap$Node
[11.2K/ 27%/ 722KB] 3.52MB          8   com.intellij.configurationStore.StateStorageManagerImpl$createDirectoryBasedStorage$1
[11.2K/ 27%/ 722KB] 3.52MB          8   java.util.concurrent.atomic.AtomicReference
[11.2K/ 27%/ 722KB] 3.52MB          8   com.intellij.configurationStore.StateMap
[11.2K/ 27%/ 722KB] 3.38MB          8   java.util.concurrent.atomic.AtomicReferenceArray
[11.2K/ 27%/ 722KB] 3.38MB          8   java.lang.Object[]
[11.2K/ 27%/ 722KB] 3.37MB       1454   org.jdom.Element
[9.83K/ 23%/ 629KB] 2.97MB       1454   org.jdom.ContentList
[9.83K/ 23%/ 629KB] 2.91MB       1454   org.jdom.Content[]
[9.83K/ 23%/ 629KB] 2.85MB       4362   org.jdom.Element
[5.47K/ 13%/ 350KB] 2.56MB       4356   org.jdom.ContentList
[5.47K/ 13%/ 350KB] 2.39MB       4356   org.jdom.Content[]
[5.47K/ 13%/ 350KB]  2.2MB       4362   org.jdom.Element
[1.11K/  2%/71.0KB]  573KB         12   org.jdom.ContentList
[1.11K/  2%/71.0KB]  572KB         12   org.jdom.Content[]
[1.11K/  2%/71.0KB]  572KB         24   org.jdom.Element
[1.08K/  2%/69.5KB]  565KB          6   org.jdom.ContentList
[1.08K/  2%/69.5KB]  564KB          6   org.jdom.Content[]
[1.08K/  2%/69.5KB]  553KB       1084   org.jdom.Element
[    2/  0%/  128B]   952B          2   org.jdom.ContentList
[    2/  0%/  128B]   872B          2   org.jdom.Content[]
[    2/  0%/  128B]   784B          2 * org.jdom.Element
Root 3:
[    5/  0%/  320B] 1.21MB          1   ROOT: Class definition: com.intellij.lang.javascript.nashorn.resolve.NashornJSScopeOptimizer
[    5/  0%/  320B] 1.21MB          1   java.lang.Class
[    5/  0%/  320B] 1.21MB          1   com.intellij.ide.plugins.SubPluginClassLoader
[    5/  0%/  320B]  3.3KB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[    5/  0%/  320B] 2.87KB          1   com.intellij.ide.plugins.ContainerDescriptor
[    5/  0%/  320B] 2.82KB          1   java.util.LinkedHashMap
[    5/  0%/  320B] 2.57KB          2   java.util.LinkedHashMap$Entry
[    3/  0%/  192B]  1.3KB          2   java.util.LinkedHashMap$Entry
[    2/  0%/  128B]   800B          2   java.util.ArrayList
[    2/  0%/  128B]   752B          2   java.lang.Object[]
[    2/  0%/  128B]   568B          2 * org.jdom.Element
Root 4:
[    2/  0%/  128B] 75.0KB          1   ROOT: Class definition: com.intellij.freemarker.psi.injection.FtlConfigurationInjector
[    2/  0%/  128B] 75.0KB          1   java.lang.Class
[    2/  0%/  128B] 74.8KB          1   com.intellij.ide.plugins.cl.PluginClassLoader
[    2/  0%/  128B] 1.98KB          1   com.intellij.ide.plugins.IdeaPluginDescriptorImpl
[    2/  0%/  128B] 1.46KB          1   com.intellij.ide.plugins.ContainerDescriptor
[    2/  0%/  128B] 1.41KB          1   java.util.LinkedHashMap
[    2/  0%/  128B] 1.18KB          2   java.util.LinkedHashMap$Entry
[    2/  0%/  128B]   844B          2   java.util.ArrayList
[    2/  0%/  128B]   796B          2   java.lang.Object[]
[    2/  0%/  128B]   612B          2 * org.jdom.Element
Report for org.jdom.Element created in 98.66 ms

CLASS: sun.java2d.SunGraphics2D (7567 objects)
Ignored 7422 too-deep objects
Root 1:
[   77/ 53%/24.1KB] 2.11MB          1   ROOT: Static field: java.lang.ref.Finalizer.unfinalized
[   77/ 53%/24.1KB] 2.11MB          1   java.lang.ref.Finalizer
[   76/ 52%/23.7KB] 2.11MB          1   java.lang.ref.Finalizer
[   75/ 51%/23.4KB] 2.11MB          1   java.lang.ref.Finalizer
[   74/ 51%/23.1KB] 2.11MB          1   java.lang.ref.Finalizer
[   73/ 50%/22.8KB] 2.11MB          1   java.lang.ref.Finalizer
[   72/ 49%/22.5KB] 2.11MB          1   java.lang.ref.Finalizer
[   71/ 48%/22.2KB] 2.11MB          1   java.lang.ref.Finalizer
[   70/ 48%/21.9KB]  2.1MB          1   java.lang.ref.Finalizer
[   69/ 47%/21.5KB]  2.1MB          1   java.lang.ref.Finalizer
[   68/ 46%/21.2KB]  2.1MB          1   java.lang.ref.Finalizer
[   67/ 46%/20.9KB]  2.1MB          1   java.lang.ref.Finalizer
[   66/ 45%/20.6KB]  2.1MB          1   java.lang.ref.Finalizer
[   65/ 44%/20.3KB]  2.1MB          1   java.lang.ref.Finalizer
[   64/ 44%/20.0KB]  2.1MB          1   java.lang.ref.Finalizer
[   63/ 43%/19.7KB]  2.1MB          1   java.lang.ref.Finalizer
[   62/ 42%/19.4KB]  2.1MB          1   java.lang.ref.Finalizer
[   61/ 42%/19.0KB]  2.1MB          1   java.lang.ref.Finalizer
[   60/ 41%/18.7KB]  2.1MB          1   java.lang.ref.Finalizer
[   59/ 40%/18.4KB]  2.1MB          1   java.lang.ref.Finalizer
[   58/ 40%/18.1KB]  2.1MB          1   java.lang.ref.Finalizer
[   57/ 39%/17.8KB]  2.1MB          1   java.lang.ref.Finalizer
[   56/ 38%/17.5KB] 2.09MB          1   java.lang.ref.Finalizer
[   55/ 37%/17.2KB] 2.09MB          1   java.lang.ref.Finalizer
[   54/ 37%/16.9KB] 2.09MB          1   java.lang.ref.Finalizer
[   53/ 36%/16.5KB] 2.09MB          1   java.lang.ref.Finalizer
[   52/ 35%/16.2KB] 2.09MB          1   java.lang.ref.Finalizer
[   51/ 35%/15.9KB] 2.09MB          1   java.lang.ref.Finalizer
[   50/ 34%/15.6KB] 2.09MB          1   java.lang.ref.Finalizer
[   49/ 33%/15.3KB] 2.09MB          1   java.lang.ref.Finalizer
[   48/ 33%/15.0KB] 2.09MB          1   java.lang.ref.Finalizer
[   47/ 32%/14.7KB] 2.09MB          1   java.lang.ref.Finalizer
[   46/ 31%/14.3KB] 2.09MB          1   java.lang.ref.Finalizer
[   45/ 31%/14.0KB] 2.09MB          1   java.lang.ref.Finalizer
[   44/ 30%/13.7KB] 2.09MB          1   java.lang.ref.Finalizer
[   43/ 29%/13.4KB] 2.09MB          1   java.lang.ref.Finalizer
[   42/ 28%/13.1KB] 2.09MB          1   java.lang.ref.Finalizer
[   42/ 28%/13.1KB] 2.09MB          1   java.lang.ref.Finalizer
[   41/ 28%/12.8KB] 2.09MB          1   java.lang.ref.Finalizer
[   40/ 27%/12.5KB] 2.09MB          1   java.lang.ref.Finalizer
[   39/ 26%/12.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   38/ 26%/11.8KB] 2.08MB          1   java.lang.ref.Finalizer
[   37/ 25%/11.5KB] 2.08MB          1   java.lang.ref.Finalizer
[   36/ 24%/11.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   35/ 24%/10.9KB] 2.08MB          1   java.lang.ref.Finalizer
[   34/ 23%/10.6KB] 2.08MB          1   java.lang.ref.Finalizer
[   33/ 22%/10.3KB] 2.08MB          1   java.lang.ref.Finalizer
[   32/ 22%/10.0KB] 2.08MB          1   java.lang.ref.Finalizer
[   31/ 21%/ 9.7KB] 2.08MB          1   java.lang.ref.Finalizer
[   30/ 20%/9.39KB] 2.08MB          1   java.lang.ref.Finalizer
[   29/ 20%/9.07KB] 2.08MB          1   java.lang.ref.Finalizer
[   28/ 19%/8.76KB] 2.08MB          1   java.lang.ref.Finalizer
[   27/ 18%/8.45KB] 2.08MB          1   java.lang.ref.Finalizer
[   26/ 17%/8.13KB] 2.08MB          1   java.lang.ref.Finalizer
[   25/ 17%/7.82KB] 2.08MB          1   java.lang.ref.Finalizer
[   24/ 16%/7.51KB] 2.08MB          1   java.lang.ref.Finalizer
[   23/ 15%/7.19KB] 2.08MB          1   java.lang.ref.Finalizer
[   22/ 15%/6.88KB] 2.07MB          1   java.lang.ref.Finalizer
[   21/ 14%/6.57KB] 2.07MB          1   java.lang.ref.Finalizer
[   20/ 13%/6.26KB] 2.07MB          1   java.lang.ref.Finalizer
[   19/ 13%/5.94KB] 2.07MB          1   java.lang.ref.Finalizer
[   19/ 13%/5.94KB] 2.07MB          1   java.lang.ref.Finalizer
[   18/ 12%/5.63KB] 2.07MB          1   java.lang.ref.Finalizer
[   17/ 11%/5.32KB] 2.07MB          1   java.lang.ref.Finalizer
[   16/ 11%/ 5.0KB] 2.07MB          1   java.lang.ref.Finalizer
[   15/ 10%/4.69KB] 2.07MB          1   java.lang.ref.Finalizer
[   14/  9%/4.38KB] 2.07MB          1   java.lang.ref.Finalizer
[   13/  8%/4.06KB] 2.07MB          1   java.lang.ref.Finalizer
[   12/  8%/3.75KB] 2.07MB          1   java.lang.ref.Finalizer
[   11/  7%/3.44KB] 2.07MB          1   java.lang.ref.Finalizer
[   10/  6%/3.13KB] 2.07MB          1   java.lang.ref.Finalizer
[    9/  6%/2.81KB] 2.07MB          1   java.lang.ref.Finalizer
[    8/  5%/ 2.5KB] 2.07MB          1   java.lang.ref.Finalizer
[    7/  4%/2.19KB] 2.07MB          1   java.lang.ref.Finalizer
[    6/  4%/1.87KB] 2.07MB          1   java.lang.ref.Finalizer
[    5/  3%/1.56KB] 2.07MB          1   java.lang.ref.Finalizer
[    4/  2%/1.25KB] 2.07MB          1   java.lang.ref.Finalizer
[    3/  2%/  939B] 2.06MB          1   java.lang.ref.Finalizer
[    2/  1%/  626B] 2.06MB          1   java.lang.ref.Finalizer
[    1/  0%/  313B]   420B          1   com.intellij.openapi.wm.impl.IdeBackgroundUtil$MyGraphics
[    1/  0%/  313B]   380B          1 * sun.java2d.SunGraphics2D
Root 2:
[   66/ 45%/20.6KB] 2.24MB          1   ROOT: Static field: jdk.internal.ref.CleanerFactory.commonCleaner
[   66/ 45%/20.6KB] 2.24MB          1   java.lang.ref.Cleaner
[   66/ 45%/20.6KB] 2.24MB          1   jdk.internal.ref.CleanerImpl
[   66/ 45%/20.6KB] 2.24MB          1   jdk.internal.ref.CleanerImpl$PhantomCleanableRef
[   66/ 45%/20.6KB] 2.24MB          1   jdk.internal.ref.CleanerImpl$PhantomCleanableRef
[   66/ 45%/20.6KB] 2.24MB          1   java.lang.ref.Finalizer
[   66/ 45%/20.6KB] 2.17MB          1   java.lang.ref.Finalizer
[   66/ 45%/20.6KB] 2.17MB          1   java.lang.ref.Finalizer
[   66/ 45%/20.6KB] 2.16MB          1   java.lang.ref.Finalizer
[   66/ 45%/20.6KB] 2.15MB          1   java.lang.ref.Finalizer
[   65/ 44%/20.3KB] 2.14MB          1   java.lang.ref.Finalizer
[   64/ 44%/20.0KB] 2.14MB          1   java.lang.ref.Finalizer
[   63/ 43%/19.7KB] 2.14MB          1   java.lang.ref.Finalizer
[   62/ 42%/19.4KB] 2.14MB          1   java.lang.ref.Finalizer
[   61/ 42%/19.0KB] 2.14MB          1   java.lang.ref.Finalizer
[   60/ 41%/18.7KB] 2.14MB          1   java.lang.ref.Finalizer
[   59/ 40%/18.4KB] 2.14MB          1   java.lang.ref.Finalizer
[   58/ 40%/18.1KB] 2.14MB          1   java.lang.ref.Finalizer
[   57/ 39%/17.8KB] 2.14MB          1   java.lang.ref.Finalizer
[   57/ 39%/17.8KB] 2.13MB          1   java.lang.ref.Finalizer
[   56/ 38%/17.5KB] 2.13MB          1   java.lang.ref.Finalizer
[   56/ 38%/17.5KB] 2.09MB          1   java.lang.ref.Finalizer
[   55/ 37%/17.2KB] 2.09MB          1   java.lang.ref.Finalizer
[   54/ 37%/16.9KB] 2.09MB          1   java.lang.ref.Finalizer
[   53/ 36%/16.5KB] 2.09MB          1   java.lang.ref.Finalizer
[   52/ 35%/16.2KB] 2.09MB          1   java.lang.ref.Finalizer
[   51/ 35%/15.9KB] 2.09MB          1   java.lang.ref.Finalizer
[   50/ 34%/15.6KB] 2.09MB          1   java.lang.ref.Finalizer
[   49/ 33%/15.3KB] 2.09MB          1   java.lang.ref.Finalizer
[   48/ 33%/15.0KB] 2.09MB          1   java.lang.ref.Finalizer
[   47/ 32%/14.7KB] 2.09MB          1   java.lang.ref.Finalizer
[   46/ 31%/14.3KB] 2.09MB          1   java.lang.ref.Finalizer
[   45/ 31%/14.0KB] 2.08MB          1   java.lang.ref.Finalizer
[   44/ 30%/13.7KB] 2.08MB          1   java.lang.ref.Finalizer
[   43/ 29%/13.4KB] 2.08MB          1   java.lang.ref.Finalizer
[   42/ 28%/13.1KB] 2.08MB          1   java.lang.ref.Finalizer
[   41/ 28%/12.8KB] 2.08MB          1   java.lang.ref.Finalizer
[   40/ 27%/12.5KB] 2.08MB          1   java.lang.ref.Finalizer
[   39/ 26%/12.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   39/ 26%/12.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   38/ 26%/11.8KB] 2.08MB          1   java.lang.ref.Finalizer
[   37/ 25%/11.5KB] 2.08MB          1   java.lang.ref.Finalizer
[   36/ 24%/11.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   36/ 24%/11.2KB] 2.08MB          1   java.lang.ref.Finalizer
[   35/ 24%/10.9KB] 2.08MB          1   java.lang.ref.Finalizer
[   34/ 23%/10.6KB] 2.08MB          1   java.lang.ref.Finalizer
[   33/ 22%/10.3KB] 2.08MB          1   java.lang.ref.Finalizer
[   32/ 22%/10.0KB] 2.08MB          1   java.lang.ref.Finalizer
[   31/ 21%/ 9.7KB] 2.08MB          1   java.lang.ref.Finalizer
[   30/ 20%/9.39KB] 2.08MB          1   java.lang.ref.Finalizer
[   29/ 20%/9.07KB] 2.07MB          1   java.lang.ref.Finalizer
[   28/ 19%/8.76KB] 2.07MB          1   java.lang.ref.Finalizer
[   27/ 18%/8.45KB] 2.07MB          1   java.lang.ref.Finalizer
[   26/ 17%/8.13KB] 2.07MB          1   java.lang.ref.Finalizer
[   25/ 17%/7.82KB] 2.07MB          1   java.lang.ref.Finalizer
[   24/ 16%/7.51KB] 2.07MB          1   java.lang.ref.Finalizer
[   23/ 15%/7.19KB] 2.07MB          1   java.lang.ref.Finalizer
[   22/ 15%/6.88KB] 2.07MB          1   java.lang.ref.Finalizer
[   21/ 14%/6.57KB] 2.07MB          1   java.lang.ref.Finalizer
[   20/ 13%/6.26KB] 2.07MB          1   java.lang.ref.Finalizer
[   19/ 13%/5.94KB] 2.07MB          1   java.lang.ref.Finalizer
[   18/ 12%/5.63KB] 2.07MB          1   java.lang.ref.Finalizer
[   18/ 12%/5.63KB] 2.07MB          1   java.lang.ref.Finalizer
[   17/ 11%/5.32KB] 2.07MB          1   java.lang.ref.Finalizer
[   16/ 11%/ 5.0KB] 2.07MB          1   java.lang.ref.Finalizer
[   15/ 10%/4.69KB] 2.07MB          1   java.lang.ref.Finalizer
[   14/  9%/4.38KB] 2.07MB          1   java.lang.ref.Finalizer
[   13/  8%/4.06KB] 2.07MB          1   java.lang.ref.Finalizer
[   12/  8%/3.75KB] 2.07MB          1   java.lang.ref.Finalizer
[   11/  7%/3.44KB] 2.07MB          1   java.lang.ref.Finalizer
[   10/  6%/3.13KB] 2.07MB          1   java.lang.ref.Finalizer
[    9/  6%/2.81KB] 2.06MB          1   java.lang.ref.Finalizer
[    8/  5%/ 2.5KB] 2.06MB          1   java.lang.ref.Finalizer
[    7/  4%/2.19KB] 2.06MB          1   java.lang.ref.Finalizer
[    6/  4%/1.87KB] 2.06MB          1   java.lang.ref.Finalizer
[    5/  3%/1.56KB] 2.06MB          1   java.lang.ref.Finalizer
[    4/  2%/1.25KB] 2.06MB          1   java.lang.ref.Finalizer
[    3/  2%/  939B] 2.06MB          1   java.lang.ref.Finalizer
[    2/  1%/  626B] 2.06MB          1   java.lang.ref.Finalizer
[    1/  0%/  313B]   596B          1   com.intellij.openapi.wm.impl.IdeBackgroundUtil$MyGraphics
[    1/  0%/  313B]   556B          1 * sun.java2d.SunGraphics2D
Root 3:
[    1/  0%/  313B]  627KB          1   ROOT: Static field: sun.awt.AppContext.mainAppContext
[    1/  0%/  313B]  627KB          1   sun.awt.AppContext
[    1/  0%/  313B] 56.8KB          1   sun.awt.MostRecentKeyValue
[    1/  0%/  313B] 56.7KB          1   javax.swing.RepaintManager
[    1/  0%/  313B] 1.06KB          1   javax.swing.BufferStrategyPaintManager
[    1/  0%/  313B]   872B          1 * sun.java2d.SunGraphics2D
Report for sun.java2d.SunGraphics2D created in 29.30 ms

CLASS: com.intellij.reference.SoftReference (44411 objects)
Ignored 127 too-deep objects
Root 1:
[20.6K/ 46%/ 992KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[20.6K/ 46%/ 992KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[20.6K/ 46%/ 992KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[20.6K/ 46%/ 992KB]  619MB          1   java.lang.Object[]
[14.5K/ 32%/ 698KB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[14.5K/ 32%/ 698KB]  566MB          9   com.intellij.openapi.util.Ref
[14.5K/ 32%/ 698KB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[14.5K/ 32%/ 698KB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[14.4K/ 32%/ 693KB] 48.5MB          5 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[14.0K/ 31%/ 675KB] 26.9MB          5   com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[14.0K/ 31%/ 675KB] 26.9MB          5   java.util.concurrent.ConcurrentHashMap
[14.0K/ 31%/ 675KB] 26.9MB          5   java.util.concurrent.ConcurrentHashMap$Node[]
[14.0K/ 31%/ 675KB] 25.7MB         10   java.util.concurrent.ConcurrentHashMap$Node
[14.0K/ 31%/ 675KB] 25.7MB         10   com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[14.0K/ 31%/ 674KB] 25.7MB          1   com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[14.0K/ 31%/ 674KB] 25.7MB          1   com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[14.0K/ 31%/ 674KB] 25.7MB          1   com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[14.0K/ 31%/ 674KB] 25.7MB          1   java.util.HashMap
[14.0K/ 31%/ 674KB] 25.7MB          1   java.util.HashMap$Node[]
[14.0K/ 31%/ 674KB] 25.6MB          3   java.util.HashMap$Node
[12.9K/ 29%/ 620KB] 24.4MB          2   com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[12.9K/ 29%/ 620KB] 24.4MB          2   com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[12.8K/ 29%/ 617KB] 8.61MB          2   com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[12.8K/ 29%/ 617KB] 8.49MB          2   com.intellij.openapi.editor.impl.MarkupModelImpl
[12.8K/ 29%/ 617KB] 8.49MB          3   com.intellij.openapi.editor.impl.RangeHighlighterTree
[12.8K/ 29%/ 617KB] 8.49MB          3   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[10.3K/ 23%/ 494KB] 7.37MB          5   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[10.2K/ 23%/ 492KB] 7.24MB          8   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[9.99K/ 22%/ 479KB] 7.03MB         14   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[9.97K/ 22%/ 478KB] 6.88MB         27   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[8.94K/ 20%/ 429KB] 6.24MB         51   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[8.42K/ 19%/ 404KB] 5.86MB         98   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[7.63K/ 17%/ 366KB] 5.36MB        193   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[7.07K/ 15%/ 339KB] 4.89MB        360   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[5.95K/ 13%/ 285KB] 4.05MB        572   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[4.53K/ 10%/ 217KB] 2.83MB        603   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[2.46K/  5%/ 118KB]  1.2MB        484   com.intellij.util.SmartList
[2.44K/  5%/ 117KB] 1.17MB        467   com.intellij.openapi.util.StaticGetter
[2.44K/  5%/ 117KB] 1.16MB        467   com.intellij.openapi.editor.impl.RangeHighlighterImpl
[2.44K/  5%/ 117KB]  1.1MB        467   com.intellij.codeInsight.daemon.impl.HighlightInfo
[2.36K/  5%/ 113KB]  981KB        448   com.intellij.psi.impl.source.tree.java.PsiIdentifierImpl
[1.19K/  2%/57.3KB]  480KB        319   com.intellij.psi.impl.source.tree.java.PsiReferenceExpressionImpl
[  384/  0%/18.4KB]  157KB        104   com.intellij.psi.impl.source.tree.java.PsiReferenceExpressionImpl
[  337/  0%/16.1KB]  102KB        102   com.intellij.psi.impl.source.tree.java.PsiMethodCallExpressionImpl
[  130/  0%/6.24KB] 20.2KB         65   com.intellij.util.keyFMap.PairElementsFMap
[  130/  0%/6.24KB] 17.6KB        130   com.intellij.psi.impl.PsiCachedValueImpl
[  130/  0%/6.24KB] 6.24KB        130 * com.intellij.reference.SoftReference (soft)
Root 2:
[10.7K/ 24%/ 518KB] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[10.7K/ 24%/ 518KB] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[10.7K/ 24%/ 518KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[10.7K/ 24%/ 518KB] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[10.6K/ 23%/ 508KB] 13.1MB          1   com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[10.6K/ 23%/ 508KB] 13.1MB          1   com.intellij.openapi.editor.impl.MarkupModelImpl
[10.6K/ 23%/ 508KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree
[10.6K/ 23%/ 508KB] 13.1MB          2   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[8.89K/ 20%/ 426KB] 3.53MB          3   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[8.89K/ 20%/ 426KB] 3.52MB          5   com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[ 6.0K/ 13%/ 288KB] 1.86MB          2   com.intellij.util.SmartList
[ 6.0K/ 13%/ 288KB] 1.86MB          2   com.intellij.openapi.util.StaticGetter
[ 6.0K/ 13%/ 288KB] 1.86MB          2   com.intellij.openapi.editor.impl.RangeHighlighterImpl
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.codeInsight.daemon.RelatedItemLineMarkerInfo$RelatedItemLineMarkerGutterIconRenderer
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.spring.gutter.groups.SpringRelatedMergeableLineMarkerInfo
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.codeInsight.navigation.NavigationGutterIconBuilder$MyNavigationGutterIconRenderer
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.openapi.util.NotNullLazyValue$1
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.openapi.util.NotNullLazyValue$$Lambda$1542
[5.99K/ 13%/ 287KB] 1.86MB          1   java.util.ArrayList
[5.99K/ 13%/ 287KB] 1.86MB          1   java.lang.Object[]
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.psi.impl.smartPointers.SmartPsiElementPointerImpl
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.psi.impl.smartPointers.HardElementInfo
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.psi.impl.PomTargetPsiElementImpl
[5.99K/ 13%/ 287KB] 1.86MB          1   com.intellij.spring.model.xml.DomSpringBeanPointerImpl$DomSpringBeanPsiTarget
[5.96K/ 13%/ 286KB] 1.46MB          1   com.intellij.psi.impl.source.xml.XmlTagImpl
[5.59K/ 12%/ 268KB] 1.37MB          1   com.intellij.psi.impl.source.xml.XmlTagImpl
[5.55K/ 12%/ 266KB] 1.34MB          1   com.intellij.psi.impl.source.xml.XmlTagValueImpl
[5.49K/ 12%/ 263KB] 1.32MB          1   com.intellij.psi.xml.XmlTagChild[]
[ 5.4K/ 12%/ 259KB]  1.3MB         30   com.intellij.psi.impl.source.xml.XmlTagImpl
[4.29K/  9%/ 206KB] 1.03MB         30   com.intellij.psi.impl.source.xml.XmlTagValueImpl
[4.11K/  9%/ 197KB]  960KB         30   com.intellij.psi.xml.XmlTagChild[]
[4.11K/  9%/ 197KB]  957KB        150   com.intellij.psi.impl.source.xml.XmlTagImpl
[2.46K/  5%/ 118KB]  584KB        150   com.intellij.psi.xml.XmlAttribute[]
[2.46K/  5%/ 118KB]  580KB        300   com.intellij.psi.impl.source.xml.XmlAttributeImpl
[ 1.5K/  3%/72.0KB]  226KB        300   com.intellij.util.keyFMap.ArrayBackedFMap
[ 1.5K/  3%/72.0KB]  208KB        300   java.lang.Object[]
[ 1.5K/  3%/72.0KB]  190KB       1500   com.intellij.psi.impl.PsiCachedValueImpl
[ 1.5K/  3%/72.0KB] 72.0KB       1500 * com.intellij.reference.SoftReference (soft)
Root 3:
[    1/  0%/   48B] 6.19KB          1   ROOT: Static field: icons.MavenIcons.ExecuteMavenGoal
[    1/  0%/   48B] 6.19KB          1   com.intellij.ui.CoreIconManager$IconWithToolTipImpl
[    1/  0%/   48B]   408B          1   com.intellij.openapi.util.IconLoader$ScaledIconCache
[    1/  0%/   48B]   384B          1   java.util.Collections$SynchronizedMap
[    1/  0%/   48B]   336B          1   com.intellij.util.containers.FixedHashMap
[    1/  0%/   48B]   116B          1   java.util.LinkedHashMap$Entry
[    1/  0%/   48B]    48B          1 * com.intellij.reference.SoftReference (soft)
Root 4:
[    1/  0%/   48B] 6.18KB          1   ROOT: Static field: com.intellij.icons.AllIcons$General.Dropdown
[    1/  0%/   48B] 6.18KB          1   com.intellij.ui.CoreIconManager$IconWithToolTipImpl
[    1/  0%/   48B]   408B          1   com.intellij.openapi.util.IconLoader$ScaledIconCache
[    1/  0%/   48B]   384B          1   java.util.Collections$SynchronizedMap
[    1/  0%/   48B]   336B          1   com.intellij.util.containers.FixedHashMap
[    1/  0%/   48B]   116B          1   java.util.LinkedHashMap$Entry
[    1/  0%/   48B]    48B          1 * com.intellij.reference.SoftReference (soft)
Report for com.intellij.reference.SoftReference created in 256.8 ms

CLASS: com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo (42805 objects)
Root 1:
[32.9K/ 77%/1.35MB] 24.6MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.ManagingFS$ManagingFSHolder.ourInstance
[32.9K/ 77%/1.35MB] 24.6MB          1   com.intellij.openapi.vfs.newvfs.persistent.PersistentFSImpl
[32.9K/ 77%/1.35MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap
[32.9K/ 77%/1.35MB] 9.41MB          1   com.intellij.concurrency.ConcurrentHashMap$Node[]
[32.9K/ 77%/1.35MB] 8.57MB          1   com.intellij.concurrency.ConcurrentHashMap$Node
[32.9K/ 77%/1.35MB] 8.57MB          1   com.intellij.openapi.vfs.newvfs.impl.FsRoot
[32.9K/ 77%/1.35MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtFileSystemImpl
[32.9K/ 77%/1.35MB] 8.57MB          1   java.util.Collections$SynchronizedMap
[32.9K/ 77%/1.35MB] 8.57MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap
[32.9K/ 77%/1.35MB] 8.57MB          1   java.lang.Object[]
[32.9K/ 77%/1.35MB] 8.57MB          1   com.intellij.openapi.vfs.impl.jrt.JrtHandler
[32.9K/ 77%/1.35MB] 8.57MB          1 ! com.intellij.reference.SoftReference (soft)
[32.9K/ 77%/1.35MB] 8.57MB          1   java.util.HashMap
[32.9K/ 77%/1.35MB] 8.57MB          1   java.util.HashMap$Node[]
[32.9K/ 77%/1.35MB] 8.04MB      26016   java.util.HashMap$Node
[26.3K/ 61%/1.07MB] 2.82MB      26016   +-com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
[  286/  0%/11.7KB] 24.8KB        283   | com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
[    3/  0%/  123B]   264B          3 * | com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
[6.66K/ 15%/ 273KB] 1.66MB       5676   \-java.util.HashMap$Node
[5.65K/ 13%/ 231KB]  608KB       5650 *   com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
Root 2:
[9.83K/ 22%/ 403KB] 1.92MB          1   ROOT: Static field: com.intellij.openapi.vfs.newvfs.VfsImplUtil.ourHandlerCache
[9.83K/ 22%/ 403KB] 1.92MB          1   it.unimi.dsi.fastutil.objects.Object2ObjectOpenCustomHashMap
[9.83K/ 22%/ 403KB] 1.73MB          1   java.lang.Object[]
[9.83K/ 22%/ 403KB] 1.24MB          7   com.intellij.openapi.util.Pair
[9.83K/ 22%/ 403KB] 1.24MB          7   com.intellij.openapi.vfs.impl.ZipHandler
[9.83K/ 22%/ 403KB] 1.16MB         12 ! com.intellij.reference.SoftReference (soft)
[9.76K/ 22%/ 400KB] 1.14MB          7   com.intellij.openapi.vfs.impl.ZipEntryMap
[9.76K/ 22%/ 400KB] 1.14MB          7   com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo[]
[9.76K/ 22%/ 400KB]  991KB       9761 * com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo
Report for com.intellij.openapi.vfs.impl.ArchiveHandler$EntryInfo created in 62.90 ms

CLASS: R$a (50001 objects)
Root 1:
[50.0K/100%/ 1.2MB] 17.8MB          1   ROOT: Static field: R.g
[50.0K/100%/ 1.2MB] 17.8MB          1   R
[50.0K/100%/ 1.2MB] 9.06MB          1   java.util.HashMap
[50.0K/100%/ 1.2MB] 9.06MB          1   java.util.HashMap$Node[]
[45.7K/ 91%/1.09MB] 7.15MB      34148   java.util.HashMap$Node
[34.1K/ 68%/ 819KB] 3.71MB      34148 * +-R$a
[11.6K/ 23%/ 279KB] 1.79MB       7471   \-java.util.HashMap$Node
[7.47K/ 14%/ 179KB]  802KB       7471 *   R$a
Report for R$a created in 38.39 ms

CLASS: java.nio.DirectByteBuffer (1099 objects)
Root 1:
[ 1.0K/ 91%/ 323MB]  958KB          1   ROOT: Static field: com.intellij.util.io.PagedFileStorage.ourLock
[ 1.0K/ 91%/ 323MB]  958KB          1   com.intellij.util.io.StorageLock
[ 1.0K/ 91%/ 323MB]  591KB          1   com.intellij.util.io.StorageLock$1
[ 1.0K/ 90%/ 322MB]  587KB          1   com.intellij.util.containers.hash.LinkedHashMap$Entry[]
[ 1.0K/ 90%/ 322MB]  566KB        896   com.intellij.util.containers.hash.LinkedHashMap$Entry
[  920/ 83%/ 284MB]  488KB        895   +-com.intellij.util.io.DirectBufferWrapper
[  920/ 83%/ 284MB]  164KB        895   | java.nio.DirectByteBuffer
[   25/  2%/1.03MB] 8.25KB         20   | jdk.internal.ref.Cleaner
[   25/  2%/1.03MB] 6.41KB         25   | jdk.internal.ref.Cleaner
[   25/  2%/1.03MB]  1.8KB         25 * | java.nio.DirectByteBuffer
[   80/  7%/38.1MB] 20.1KB         78   \-com.intellij.util.containers.hash.LinkedHashMap$Entry
[   78/  7%/37.1MB] 14.7KB         78     com.intellij.util.io.DirectBufferWrapper
[   78/  7%/37.1MB] 11.6KB         78 *   java.nio.DirectByteBuffer
Root 2:
[    8/  0%/ 134MB] 16.8MB          1   ROOT: Static field: io.netty.buffer.ByteBufAllocator.DEFAULT
[    8/  0%/ 134MB] 16.8MB          1   io.netty.buffer.PooledByteBufAllocator
[    8/  0%/ 134MB] 39.9KB          1   io.netty.buffer.PoolArena[]
[    8/  0%/ 134MB] 39.8KB          1   io.netty.buffer.PoolArena$DirectArena
[    8/  0%/ 134MB] 23.2KB          1   io.netty.buffer.PoolChunkList
[    8/  0%/ 134MB] 23.2KB          1   io.netty.buffer.PoolChunk
[    7/  0%/ 117MB]   700B          1   java.util.ArrayDeque
[    7/  0%/ 117MB]   676B          1   java.lang.Object[]
[    7/  0%/ 117MB]   504B          7 * java.nio.DirectByteBuffer
Root 3:
[    1/  0%/62.6MB] 1.34KB          1   ROOT: Static field: jdk.internal.module.SystemModuleFinders$SystemImage.READER
[    1/  0%/62.6MB] 1.34KB          1   jdk.internal.jimage.ImageReader!2
[    1/  0%/62.6MB] 1.32KB          1   jdk.internal.jimage.ImageReader$SharedImageReader!2
[    1/  0%/62.6MB]   144B          1   java.nio.DirectByteBufferR
[    1/  0%/62.6MB]    72B          1 * java.nio.DirectByteBuffer
Root 4:
[   29/  2%/50.8MB] 3.23MB          1   ROOT: Thread object
[   29/  2%/50.8MB] 3.23MB          1   java.lang.Thread
[   29/  2%/50.8MB] 3.13MB          1   com.intellij.ide.plugins.MainRunner$1
[   29/  2%/50.8MB] 3.13MB          1   java.lang.Thread[]
[    4/  0%/50.3MB]  271KB          1   io.netty.util.concurrent.FastThreadLocalThread
[    3/  0%/50.3MB]  247KB          1   io.netty.util.internal.InternalThreadLocalMap
[    3/  0%/50.3MB]  244KB          1   java.lang.Object[]
[    3/  0%/50.3MB]  219KB          1   io.netty.buffer.PoolThreadCache
[    3/  0%/50.3MB]  108KB          1   io.netty.buffer.PoolThreadCache$MemoryRegionCache[]
[    3/  0%/50.3MB] 8.74KB          3   io.netty.buffer.PoolThreadCache$SubPageMemoryRegionCache
[    3/  0%/50.3MB] 8.65KB          3   io.netty.util.internal.shaded.org.jctools.queues.MpscArrayQueue
[    3/  0%/50.3MB] 6.63KB          3   java.lang.Object[]
[    3/  0%/50.3MB]   456B          3   io.netty.buffer.PoolThreadCache$MemoryRegionCache$Entry
[    3/  0%/50.3MB]   216B          3 * java.nio.DirectByteBuffer
Root 5:
[    7/  0%/3.91MB] 2.39KB          1   ROOT: Static field: com.intellij.util.io.DirectByteBufferPool.DEFAULT_POOL
[    7/  0%/3.91MB] 2.39KB          1   com.intellij.util.io.DirectByteBufferPool
[    7/  0%/3.91MB] 2.35KB          1   java.util.concurrent.ConcurrentSkipListMap
[    7/  0%/3.91MB] 2.18KB          1   java.util.concurrent.ConcurrentSkipListMap$Index
[    4/  0%/3.89MB]  1.1KB          1   java.util.concurrent.ConcurrentSkipListMap$Index
[    4/  0%/3.89MB] 1.07KB          1   java.util.concurrent.ConcurrentSkipListMap$Index
[    4/  0%/3.89MB] 1.04KB          2   java.util.concurrent.ConcurrentSkipListMap$Index
[    1/  0%/3.69MB]   116B          1   java.util.concurrent.ConcurrentSkipListMap$Node
[    1/  0%/3.69MB]    72B          1 * java.nio.DirectByteBuffer
Root 6:
[    2/  0%/46.6KB] 10.2MB          1   ROOT: Static field: jdk.internal.jimage.ImageReader$SharedImageReader!1.OPEN_FILES
[    2/  0%/46.6KB] 10.2MB          1   java.util.HashMap
[    2/  0%/46.6KB] 10.2MB          1   java.util.HashMap$Node[]
[    2/  0%/46.6KB] 10.2MB          1   java.util.HashMap$Node
[    2/  0%/46.6KB] 10.2MB          1   jdk.internal.jimage.ImageReader$SharedImageReader!1
[    2/  0%/46.6KB]   896B          1   java.nio.DirectByteBufferR
[    2/  0%/46.6KB]   824B          1   java.nio.DirectByteBufferR
[    2/  0%/46.6KB]   704B          1   jdk.internal.ref.Cleaner
[    2/  0%/46.6KB]   604B          2   jdk.internal.ref.Cleaner
[    2/  0%/46.6KB]   144B          2 * java.nio.DirectByteBuffer
Report for java.nio.DirectByteBuffer created in 33.46 ms

================== DISPOSER TREE ==================
Root: com.intellij.openapi.application.impl.ApplicationImpl
    2480 PsiReferenceRegistrarImpl$3 <-- 1 JsfComponentLibrariesReferenceContributor [...] 1
     384 PsiReferenceRegistrarImpl$1 <-- 1 SpringSecurityRolesReferenceContributor [...] 1
     264 PsiReferenceRegistrarImpl$1 <-- 1 SwReferenceContributor [...] 1
     132 PsiReferenceRegistrarImpl$1 <-- 1 XmlReferenceContributor [...] 1
     120 PsiReferenceRegistrarImpl$3 <-- 1 XmlReferenceContributor [...] 1
      77 ExtensionPointImpl$$Lambda$734 <-- 41 com.intellij.openapi.util.Disposer$1 [...] 1
      60 PsiReferenceRegistrarImpl$1 <-- 1 JUnitReferenceContributor [...] 1
      50 com.intellij.openapi.util.Disposer$1 <-- 1
      48 PsiReferenceRegistrarImpl$1 <-- 1 PropertiesReferenceContributor [...] 1
      48 PsiReferenceRegistrarImpl$1 <-- 1 JavaReferenceContributor [...] 1
      48 PsiReferenceRegistrarImpl$1 <-- 1 JavaFxCSSReferenceContributor [...] 1
      48 PsiReferenceRegistrarImpl$3 <-- 1 CssReferenceContributor [...] 1
      48 PsiReferenceRegistrarImpl$1 <-- 1 SpringReferenceContributor [...] 1
      48 PsiReferenceRegistrarImpl$1 <-- 1 CssReferenceContributor [...] 1
      46 PsiReferenceRegistrarImpl$1 <-- 1 SpringMQReferenceContributor [...] 1
      40 PsiReferenceRegistrarImpl$3 <-- 1 JsfReferenceContributor [...] 1
      38 PsiReferenceRegistrarImpl$3 <-- 1 I18nReferenceContributor [...] 1
      36 PsiReferenceRegistrarImpl$1 <-- 1 FxmlReferencesContributor [...] 1
      30 PsiReferenceRegistrarImpl$3 <-- 1 JspReferenceContributor [...] 1
      24 PsiReferenceRegistrarImpl$3 <-- 1 HtmlReferenceContributor [...] 1
      24 PsiReferenceRegistrarImpl$1 <-- 1 JavaFxReferencesContributor [...] 1
      24 PsiReferenceRegistrarImpl$1 <-- 1 IconsReferencesContributor [...] 1
      24 PsiReferenceRegistrarImpl$1 <-- 1 MavenPropertyPsiReferenceContributor [...] 1
      24 PsiReferenceRegistrarImpl$3 <-- 1 WSReferenceContributor [...] 1
      22 PsiReferenceRegistrarImpl$1 <-- 1 SpringUrlPathReferenceContributor [...] 1
      18 PsiReferenceRegistrarImpl$3 <-- 1 SpringFormTaglibReferenceContributor [...] 1
      16 PsiReferenceRegistrarImpl$3 <-- 1 SpringSecurityEEReferenceContributor [...] 1
      13 PsiReferenceRegistrarImpl$1 <-- 1 JpaOrmReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 MarkdownReferenceProvider [...] 1
      12 PsiReferenceRegistrarImpl$3 <-- 1 IconsReferencesContributor [...] 1
      12 PsiReferenceRegistrarImpl$3 <-- 1 SpringReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 RestAssuredReferencesContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 SpringElCommentReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 ContextHashMarkReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 SassScssReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 UrlReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 InjectedReferencesContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 LESSReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 CommentsReferenceContributor [...] 1
      12 PsiReferenceRegistrarImpl$1 <-- 1 SpringSecurityPathPatternsReferenceContributor [...] 1
      10 PsiReferenceRegistrarImpl$1 <-- 1 SpringMVCUastReferenceContributor [...] 1
      10 PsiReferenceRegistrarImpl$1 <-- 1 JmsMQReferenceContributor [...] 1
      10 PsiReferenceRegistrarImpl$3 <-- 1 WebReferenceContributor [...] 1
      10 RemoteProcessSupport$Heartbeat$$Lambda$3539 <-- 1
       9 PsiReferenceRegistrarImpl$1 <-- 1 SpringMvcVariablesReferenceContributor [...] 1
       9 ExtensionPointImpl$$Lambda$424 <-- 1
       9 PsiReferenceRegistrarImpl$1 <-- 1 SpringBootAdditionalConfigReferenceContributor [...] 1
       8 PsiReferenceRegistrarImpl$1 <-- 1 RSReferenceContributor [...] 1
       8 PsiReferenceRegistrarImpl$3 <-- 1 TestNGSuiteReferenceContributor [...] 1
       8 PsiReferenceRegistrarImpl$1 <-- 1 MnWebReferenceContributor [...] 1
       8 MessageBusConnectionImpl <-- 2 GitBranchWidget [...] 1
       8 UiNotifyConnector <-- 2 ProjectFrameHelper [...] 1
       6 DisposableWrapperList$DisposableWrapper <-- 2 PositionPanel [...] 1
       6 MessageBusConnectionImpl <-- 2 EncodingPanel [...] 1
       6 PsiReferenceRegistrarImpl$3 <-- 1 BaseJspReferenceContributor [...] 1
       6 PsiReferenceRegistrarImpl$3 <-- 1 org.intellij.lang.xpath.xslt.impl.XsltReferenceContributor$XML [...] 1
       6 DisposableWrapperList$DisposableWrapper <-- 1
       5 Preloader$$Lambda$599 <-- 1
       5 PsiReferenceRegistrarImpl$1 <-- 1 SpringUastReferenceContributor [...] 1
       5 PsiReferenceRegistrarImpl$1 <-- 1 JavaReflectionReferenceContributor [...] 1
       5 PsiReferenceRegistrarImpl$1 <-- 1 WebfluxReferenceContributor [...] 1
       5 PsiReferenceRegistrarImpl$1 <-- 1 SpringBootApplicationPropertiesReferenceContributor [...] 1
       4 MessageBusConnectionImpl <-- 2 LineSeparatorPanel [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 AmazonSqsReferenceContributor [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 DomReferenceContributor [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 FlowReferenceContributor [...] 1
       4 MessageBusConnectionImpl <-- 2 CodotaStatusWidget [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 JavaNetUrlPathReferenceContributor [...] 1
       4 IdeEventQueue$$Lambda$350 <-- 2 IdeStatusBarImpl [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 HelidonReferenceContributor [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 TestNGReferenceContributor [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 BatchReferenceContributor [...] 1
       4 MessageBusConnectionImpl <-- 1
       4 PsiReferenceRegistrarImpl$3 <-- 1 SpringTaglibReferenceContributor [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 PackageJsonReferenceContributor [...] 1
       4 IdeGlassPaneImpl$$Lambda$2227 <-- 2 com.intellij.openapi.util.Disposer$1 [...] 1
       4 MessageBusConnectionImpl <-- 2 CodeStyleStatusBarWidget [...] 1
       4 PsiReferenceRegistrarImpl$1 <-- 1 JsonSchemaReferenceContributor [...] 1
       4 MessageBusConnectionImpl <-- 2 ToggleReadOnlyAttributePanel [...] 1
       3 RegistryValue$$Lambda$401 <-- 1
       3 MessageBusConnectionImpl <-- 1 BalloonImpl [...] 1
       3 IdeEventQueue$$Lambda$350 <-- 1
       3 PsiReferenceRegistrarImpl$1 <-- 1 MnPropertyReferenceContributor [...] 1
       3 PsiReferenceRegistrarImpl$1 <-- 1 QsPropertiesReferenceContributor [...] 1
       3 LowMemoryWatcher$$Lambda$412 <-- 1
       3 PsiReferenceRegistrarImpl$1 <-- 1 MnPropertiesReferenceContributor [...] 1
       3 PsiReferenceRegistrarImpl$1 <-- 1 TypeScriptConfigJsonReferenceContributor [...] 1
       3 PsiReferenceRegistrarImpl$1 <-- 1 CodeSetupPsiReferenceContributor [...] 1
       3 SingleAlarm <-- 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 SpringBootApplicationYamlReferenceContributor [...] 1
       2 ProjectFrameHelper <-- 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 WebServletReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 RSClientUrlPathReferenceContributor [...] 1
       2 MessageBusConnectionImpl <-- 1 LocalFileSystemImpl [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 JsfReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$3 <-- 1 XmlPropertiesReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 KafkaReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 QsYamlReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 EjbReferenceContributor [...] 1
       2 PsiReferenceRegistrarImpl$1 <-- 1 MnMqPsiReferenceContributor [...] 1
[...removed 24 lines...]

Root: com.intellij.openapi.util.Disposer$1
     423 MessageBusConnectionImpl <-- 68 com.intellij.openapi.util.Disposer$1 [...] 65
     142 com.intellij.openapi.util.Disposer$1 (no parent)
      38 MarkupModelImpl$$Lambda$1888 <-- 19
      38 ToolbarVisibilityController <-- 19
      38 EditorScrollingPositionKeeper <-- 19
      30 IdeStatusBarImpl$$Lambda$1637 <-- 2 StatusBarWidgetsManager [...] 2
      26 VirtualFilePointerManagerImpl$1 <-- 9 ProjectJdkImpl [...] 1
      22 com.intellij.openapi.editor.impl.DocumentImpl$DocumentListenerDisposable <-- 11 DocumentTracker [...] 11
      15 DisposableWrapperList$DisposableWrapper <-- 8 MessageBusConnectionImpl [...] 2
      14 Editor$$Lambda$2893 <-- 7 MessageBusConnectionImpl [...] 1
      14 ScrollingModel$$Lambda$2895 <-- 7 MessageBusConnectionImpl [...] 1
      14 Editor$$Lambda$2894 <-- 7 MessageBusConnectionImpl [...] 1
      12 DisposableWrapperList$DisposableWrapper <-- 2 DaemonListeners [...] 2
      12 MessageBusConnectionImpl <-- 2 KotlinPluginDisposable [...] 2
      12 com.intellij.openapi.util.Disposer$1 <-- 2 BackendServerFileEditorManager [...] 2
      12 MessageBusConnectionImpl <-- 1 TranslationUIManager [...] 1
      11 WordBookToolWindowFactory$init$1 <-- 1 TranslationUIManager [...] 1
      10 MyComponentAdapter$doCreateInstance$1 <-- 3
       9 ProjectJdkImpl <-- 1 VirtualFilePointerManagerImpl [...] 1
       8 IdeGlassPaneImpl$$Lambda$2227 <-- 5 com.intellij.openapi.util.Disposer$1 [...] 3
       8 MessageBusConnectionImpl <-- 2 BackendServerFileEditorManager [...] 2
       7 DisposableWrapperList$DisposableWrapper <-- 2 MavenProjectsManager [...] 2
       6 MessageBusConnectionImpl <-- 3 RdServerEditorTracker [...] 3
       6 ExtensionPointImpl$$Lambda$424 <-- 2 CodeFoldingManagerImpl [...] 2
       6 DisposableWrapperList$DisposableWrapper <-- 2 LineStatusTrackerManager [...] 2
       6 ExtensionPointImpl$$Lambda$424 <-- 2 DaemonListeners [...] 2
       6 GotItTooltip <-- 2 CWMPluginDisposableService [...] 2
       6 MessageBusConnectionImpl <-- 3 StatusBarUpdater [...] 3
       6 ExtensionPointImpl$$Lambda$734 <-- 2 ArtifactManagerImpl [...] 2
       6 ExtensionPointImpl$$Lambda$424 <-- 2 JsonSchemaServiceImpl [...] 2
       6 DisposableWrapperList$DisposableWrapper <-- 3 PsiDocumentManagerImpl [...] 3
       4 DisposableWrapperList$DisposableWrapper <-- 2 GitRepositoryIgnoredFilesHolder [...] 2
       4 UiNotifyConnector <-- 2 BackendServerFileEditorManager [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 RunManagerImpl [...] 2
       4 Alarm <-- 2 KotlinPluginDisposable [...] 2
       4 ExtensionPointImpl$$Lambda$424 <-- 2 InjectedLanguageManagerImpl [...] 2
       4 ContainerUtil$$Lambda$1621 <-- 2 GroupedServersConfigManagerImpl [...] 2
       4 ExtensionPointImpl$$Lambda$424 <-- 2 ChangeListManagerImpl [...] 2
       4 MessageBusConnectionImpl <-- 2 ProjectRootManagerBridge [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 2 XDebuggerManagerImpl [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 StatusBarWidgetsManager [...] 2
       4 ExtensionPointImpl$$Lambda$424 <-- 2 ResolveScopeManagerImpl [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 2 JSLibraryMappings [...] 2
       4 ExtensionPointImpl$$Lambda$424 <-- 2 ProjectRootManagerBridge [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 CoverageDataManagerImpl [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 2 BuildViewProblemsService [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 1 MavenProjectsNavigator [...] 1
       4 ExtensionPointImpl$$Lambda$424 <-- 2 VcsRootScanner [...] 2
       4 MessageBusConnectionImpl <-- 2 JSLibraryMappings [...] 2
       4 MessageBusConnectionImpl <-- 2 ChangeListManagerImpl [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 2 IdeDocumentHistoryImpl [...] 2
       4 DisposableWrapperList$DisposableWrapper <-- 2 PackageJsonForLintersConfigChangeTracker$MyPackageJsonChangeTracker [...] 2
       4 Alarm <-- 2 BackendServerFileEditorManager [...] 2
       4 com.intellij.util.ui.UIUtil$$Lambda$416 <-- 2 BackendServerFileEditorManager [...] 2
       4 MessageBusConnectionImpl <-- 2 TypeScriptConfigGraphCache [...] 2
       4 MessageBusConnectionImpl <-- 2 JpsProjectModelSynchronizer [...] 2
       3 DisposableWrapperList$DisposableWrapper <-- 1 EditorMouseHoverPopupManager [...] 1
       3 ExtensionPointImpl$$Lambda$424 <-- 1 SpellCheckerManager [...] 1
       3 MavenMergingUpdateQueue <-- 2 MavenProjectsManager [...] 2
       3 DisposableWrapperList$DisposableWrapper <-- 1 MavenMergingUpdateQueue [...] 1
       2 Alarm <-- 1 BuildManager [...] 1
       2 ExtensionPointImpl$$Lambda$424 <-- 1 LibraryPresentationManagerImpl [...] 1
       2 ExtensionPointImpl$$Lambda$424 <-- 1 LibraryDetectionManagerImpl [...] 1
       2 AnAction$$Lambda$1437 <-- 1 MavenProjectsNavigator [...] 1
       2 MessageBusConnectionImpl <-- 1 MavenMergingUpdateQueue [...] 1
       2 TextQueryRunnerService$$Lambda$4161 <-- 1 LifecycleHelper [...] 1
       2 ExtensionPointImpl$$Lambda$424 <-- 1 JSDisposable [...] 1
       2 DisposableWrapperList$DisposableWrapper <-- 1 ApplicationServersManagerImpl [...] 1
       2 DisposableWrapperList$DisposableWrapper <-- 1 EncodingManagerImpl [...] 1
       2 ExtensionPointImpl$$Lambda$424 <-- 1 ColorSettingsPagesImpl [...] 1
       2 AppExecutorUtil$$Lambda$491 <-- 1 RefreshQueueImpl [...] 1

Root: com.intellij.openapi.editor.impl.CaretModelImpl
      95 com.intellij.openapi.editor.impl.DocumentImpl$DocumentListenerDisposable <-- 19
      57 DisposableWrapperList$DisposableWrapper <-- 19
      38 MarkupModelImpl$$Lambda$1888 <-- 19
      19 CaretModelImpl (no parent)

Root: com.intellij.openapi.project.impl.ProjectExImpl
      94 com.intellij.openapi.util.Disposer$1 <-- 2
      60 DisposableWrapperList$DisposableWrapper <-- 2
      45 ExtensionPointImpl$$Lambda$734 <-- 2
      39 MessageBusConnectionImpl <-- 2
      36 UiNotifyConnector <-- 9 ContentManagerImpl [...] 2
      33 MessageBusConnectionImpl <-- 31 com.intellij.openapi.util.Disposer$1 [...] 2
      30 ExtensionPointImpl$$Lambda$424 <-- 2
      24 com.intellij.openapi.util.Disposer$1 <-- 3 ContentManagerImpl [...] 2
      23 MergingUpdateQueue <-- 2
      20 ContentImpl <-- 4 ContentManagerImpl [...] 2
      19 EditorWithProviderComposite <-- 2
      16 NavBarItem <-- 2 NavBarPanel [...] 2
      15 NonBlockingReadActionImpl$Submission$1 <-- 1
      15 DisposableWrapperList$DisposableWrapper <-- 5 com.intellij.openapi.util.Disposer$1 [...] 2
      14 Alarm <-- 2
      11 VirtualFileManagerImpl$$Lambda$535 <-- 2
      10 LifetimeDisposableExKt$defineNestedLifetime$1 <-- 2
       8 NamedScopesHolder$$Lambda$992 <-- 2
       6 FacetFinderImpl$AllFacetsOfTypeModificationTracker <-- 1
       6 AtomicBooleanProperty$afterSet$1 <-- 2 com.intellij.openapi.util.Disposer$1 [...] 2
       6 MessageBusConnectionImpl <-- 2 ProjectViewPane [...] 2
       4 com.intellij.openapi.util.Disposer$1 <-- 2 EditorWithProviderComposite [...] 2
       4 RegistryValue$$Lambda$401 <-- 2
       4 NamedScopesHolder$$Lambda$992 <-- 2 ScopeViewPane [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 ProjectViewPane [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 GrailsProjectViewPane [...] 2
       4 ProjectWideFacetListenersRegistryImpl$2 <-- 2
       4 AnAction$$Lambda$1437 <-- 2 AbstractProjectViewPSIPane$1 [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 PackageViewPane [...] 2
       4 ExtensionPointImpl$$Lambda$734 <-- 2 ScopeViewPane [...] 2
       4 VirtualFileManagerImpl$$Lambda$535 <-- 2 com.intellij.openapi.util.Disposer$1 [...] 2
       2 WeakReferenceDisposableWrapper <-- 1
       2 AtomicBooleanProperty$afterReset$1 <-- 1 com.intellij.openapi.util.Disposer$1 [...] 1
       2 Alarm <-- 1 StructureViewComponent [...] 1
       2 ProjectExImpl (no parent)
       2 ExtensionPointImpl$$Lambda$424 <-- 1 StructureViewWrapperImpl [...] 1

Root: com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl
      76 ExtensionPointImpl$$Lambda$734 <-- 19 PsiAwareTextEditorImpl$PsiAwareTextEditorComponent [...] 19
      38 MessageBusConnectionImpl <-- 19 PsiAwareTextEditorImpl$PsiAwareTextEditorComponent [...] 19
      19 PsiAwareTextEditorImpl (no parent)

Root: com.intellij.openapi.project.impl.DefaultProject
      36 WholeFileLocalInspectionsPassFactory <-- 1
      36 com.intellij.openapi.util.Disposer$1 <-- 1
      36 NamedScopesHolder$$Lambda$992 <-- 1
      36 ExtensionPointImpl$$Lambda$734 <-- 1
      36 MergingUpdateQueue <-- 1
       1 DefaultProject (no parent)

Root: com.intellij.openapi.editor.impl.view.EditorView
      19 EditorView (no parent)

Root: com.intellij.openapi.editor.impl.SoftWrapModelImpl
      19 SoftWrapModelImpl (no parent)

Root: git4idea.vfs.GitVFSListener
       8 MessageBusConnectionImpl <-- 2
       2 GitVFSListener (no parent)

Root: com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl
       5 ModuleBridgeImpl (no parent)
       4 VirtualFilePointerManagerImpl$1 <-- 2 com.intellij.openapi.util.Disposer$1 [...] 2

Root: com.intellij.workspaceModel.ide.impl.legacyBridge.module.roots.RootModelBridgeImpl
       5 RootModelBridgeImpl (no parent)

Root: com.intellij.openapi.roots.impl.libraries.LibraryImpl
       3 LibraryImpl (no parent)

Root: com.intellij.vcs.log.impl.VcsLogManager
       2 VcsLogManager (no parent)

Root: com.intellij.ide.navigationToolbar.experimental.NewToolbarRootPaneExtension
       2 NewToolbarRootPaneExtension (no parent)

Root: com.intellij.openapi.vcs.impl.LineStatusTrackerManager$MyBaseRevisionLoader
       2 LineStatusTrackerManager$MyBaseRevisionLoader (no parent)

Root: com.intellij.xml.breadcrumbs.BreadcrumbsXmlWrapper
       2 ExtensionPointImpl$$Lambda$424 <-- 1
       1 BreadcrumbsXmlWrapper (no parent)

Root: com.intellij.internal.statistic.eventLog.logger.StatisticsEventLogThrottleWriter
       2 StatisticsEventLogThrottleWriter (no parent)

Root: com.intellij.vcs.log.data.VcsLogStatusBarProgress
       2 VcsLogStatusBarProgress (no parent)

Root: com.intellij.indexing.shared.platform.impl.SharedIndexChunk
       1 SharedIndexChunk (no parent)

Root: com.intellij.openapi.ui.impl.GlassPaneDialogWrapperPeer$MyDialog
       1 GlassPaneDialogWrapperPeer$MyDialog (no parent)

Root: com.intellij.psi.stubs.SerializationManagerImpl
       1 SerializationManagerImpl (no parent)

================= DISPOSED OBJECTS ================
Count of disposed-but-strong-referenced objects: 10430
  2144 com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl
  1985 com.intellij.util.messages.impl.MessageBusConnectionImpl
  989 com.intellij.util.Alarm
  639 com.intellij.openapi.util.Disposer$1
  314 com.intellij.ui.tabs.layout.singleRowLayout.ScrollableSingleRowLayout
  227 com.intellij.util.ui.update.MergingUpdateQueue
  202 com.intellij.ui.content.impl.ContentImpl
  194 com.intellij.util.SingleAlarm
  186 com.intellij.openapi.editor.ex.util.EditorScrollingPositionKeeper
  105 com.intellij.ide.navigationToolbar.NavBarItem
  99 com.intellij.ui.content.impl.ContentManagerImpl
  97 com.intellij.util.ui.AnimatedIcon$1
  93 com.intellij.openapi.editor.impl.view.EditorView
  93 com.intellij.openapi.editor.impl.EditorImpl$$Lambda$1891
  93 com.intellij.openapi.editor.impl.view.EditorSizeManager
  93 com.intellij.openapi.editor.impl.CaretImpl
  93 com.intellij.openapi.editor.impl.InlayModelImpl
  93 com.intellij.openapi.editor.impl.view.LogicalPositionCache
  93 com.intellij.openapi.editor.impl.FocusModeModel
  93 com.intellij.openapi.editor.impl.SoftWrapModelImpl
  93 com.intellij.openapi.editor.impl.view.TextLayoutCache
  93 com.intellij.openapi.editor.impl.CaretModelImpl
  90 com.intellij.ui.tabs.impl.JBTabsImpl$5
  81 com.intellij.util.ui.AsyncProcessIcon
  81 com.intellij.execution.impl.MyDiffContainer
  74 com.intellij.ui.popup.AbstractPopup
  71 com.intellij.execution.ui.layout.impl.GridImpl
  65 com.intellij.execution.impl.ConsoleViewImpl
  44 com.intellij.util.messages.impl.CompositeMessageBus
  41 com.intellij.psi.impl.PsiDocumentManagerImpl
  41 com.intellij.psi.impl.PsiManagerImpl
  36 com.intellij.diagnostic.logging.LogConsoleManagerBase$1
  35 com.intellij.openapi.project.impl.DefaultProjectImpl
  30 com.intellij.openapi.CompositeDisposable
  28 com.intellij.openapi.application.impl.NonBlockingReadActionImpl$Submission$1
  27 com.intellij.openapi.util.ActionCallback
  23 com.intellij.openapi.vfs.impl.VirtualFilePointerContainerImpl
  20 com.intellij.execution.ui.layout.impl.RunnerLayoutUiImpl
  20 com.intellij.execution.ui.RunContentDescriptor
  20 com.intellij.execution.ui.layout.impl.RunnerContentUi
  18 com.intellij.javaee.appServers.run.configuration.view.JavaeeConsoleViewImpl
  18 com.intellij.javaee.appServers.deployment.DeploymentViewImpl
  18 org.jetbrains.idea.maven.utils.MavenMergingUpdateQueue
  17 com.intellij.util.concurrency.Invoker$Background
  16 com.intellij.openapi.ui.LoadingDecorator$1
  16 com.intellij.execution.runners.ExecutionEnvironment
  16 com.intellij.util.ui.AsyncProcessIcon$Big
  15 com.intellij.debugger.ui.impl.TipManager
  15 com.intellij.debugger.engine.DebuggerManagerThreadImpl
  15 com.intellij.xdebugger.impl.ui.XDebugSessionTab
  15 com.intellij.debugger.ui.impl.ThreadsPanel
  15 com.intellij.debugger.memory.ui.ClassesFilteredView
  15 com.intellij.util.ui.update.UiNotifyConnector
  15 com.intellij.xdebugger.impl.frame.XFramesView
  15 com.intellij.util.concurrency.Invoker$EDT
  15 com.intellij.debugger.ui.impl.ThreadsDebuggerTree
  15 com.intellij.xdebugger.impl.frame.XWatchesViewImpl
  15 com.intellij.debugger.ui.overhead.OverheadView
  15 com.intellij.ui.tree.AsyncTreeModel
  15 com.intellij.xdebugger.impl.ui.tree.XDebuggerTree
  15 com.intellij.xdebugger.memory.ui.ClassesTable
  13 com.intellij.ui.tree.StructureTreeModel
  12 com.intellij.build.BuildTextConsoleView
  12 com.intellij.workspaceModel.storage.impl.DisposableCachedValue
  12 com.intellij.util.ui.ButtonlessScrollBarUI$12
  12 com.intellij.util.descriptors.impl.ConfigFileContainerImpl
  12 com.intellij.openapi.editor.toolbar.floating.ToolbarVisibilityController
  12 com.intellij.workspaceModel.ide.impl.legacyBridge.module.roots.ModuleRootComponentBridge
  12 com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl
  12 com.intellij.workspaceModel.ide.impl.legacyBridge.module.roots.ModuleLibraryTableBridgeImpl
  12 com.intellij.util.ui.ButtonlessScrollBarUI$11
  11 com.intellij.build.BuildView
  11 com.intellij.ide.navigationToolbar.NavBarUpdateQueue
  11 com.intellij.build.BuildTreeConsoleView$ConsoleViewHandler$1
  11 com.intellij.build.BuildTreeConsoleView$ConsoleViewHandler
  11 com.intellij.build.MultipleBuildsView
  11 com.intellij.build.BuildTreeConsoleView
  9 com.intellij.openapi.vcs.changes.ChangeListManagerImpl
  9 com.intellij.ide.projectView.impl.ProjectViewPane
  9 com.intellij.ide.navigationToolbar.experimental.NewToolbarRootPaneExtension
  9 com.intellij.openapi.projectRoots.impl.jdkDownloader.JdkUpdatesCollector
  9 com.intellij.openapi.roots.impl.DirectoryIndexImpl
  9 com.intellij.lang.javascript.JSDisposable
  9 com.intellij.sh.fileType.ShShebangFileTypeDetector
  9 com.intellij.codeInsight.problems.WolfTheProblemSolverImpl
  9 com.intellij.openapi.vcs.roots.VcsRootScanner
  9 com.intellij.openapi.wm.impl.status.widget.StatusBarWidgetsManager
  9 com.intellij.psi.impl.smartPointers.SmartPointerManagerImpl
  9 com.intellij.space.vcs.SpaceProjectContext
  9 git4idea.ignore.GitIgnoreInStoreDirGenerator
  9 com.intellij.lang.ant.AntDisposable
  9 com.intellij.psi.controlFlow.ControlFlowFactory
  9 org.jetbrains.plugins.github.pullrequest.GHPRToolWindowController
  9 com.intellij.space.plugins.pipelines.services.SpaceKtsFileDetector
  9 com.intellij.workspaceModel.ide.impl.legacyBridge.project.ProjectRootManagerBridge
  9 org.jetbrains.idea.maven.project.MavenProjectsManager
  9 com.intellij.lang.javascript.linter.PackageJsonForLintersConfigChangeTracker$MyPackageJsonChangeTracker
  9 org.jetbrains.idea.maven.MavenDisposable
  9 com.intellij.ide.scopeView.ScopeViewPane
[...removed 148 lines...]

Disposed-but-strong-referenced dominator object count: 793
Disposed-but-strong-referenced dominator sub-graph size: 299MB
  96.7MB - 1 com.intellij.ui.BalloonImpl
  78.4MB - 1 com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm
  63.2MB - 8 com.intellij.openapi.project.impl.ProjectExImpl
  31.5MB - 16 com.intellij.execution.ui.RunContentDescriptor
  7.93MB - 2 com.intellij.xdebugger.impl.XDebuggerManagerImpl
  4.29MB - 7 com.jetbrains.rdserver.editors.BackendServerFileEditorManager
  3.94MB - 6 com.intellij.ui.content.impl.ContentImpl
  3.71MB - 35 com.intellij.util.messages.impl.CompositeMessageBus
  2.87MB - 7 com.intellij.build.MultipleBuildsView
  1.41MB - 6 com.intellij.openapi.vcs.changes.actions.diff.lst.UnifiedLocalChangeListDiffViewer
  1.21MB - 76 com.intellij.ui.content.impl.ContentManagerImpl
   834KB - 5 org.jetbrains.idea.maven.navigator.MavenProjectsNavigator
   495KB - 2 com.intellij.psi.impl.PsiManagerImpl
   377KB - 1 com.intellij.psi.impl.smartPointers.SmartPointerManagerImpl
   353KB - 2 com.intellij.execution.services.ServiceTreeView
   275KB - 7 com.intellij.openapi.wm.impl.status.IdeStatusBarImpl
   228KB - 1 org.jetbrains.plugins.terminal.ShellTerminalWidget
   210KB - 2 org.intellij.plugins.markdown.ui.preview.jcef.MarkdownJCEFHtmlPanel
   204KB - 2 com.intellij.openapi.vcs.impl.ProjectLevelVcsManagerImpl$VcsConsoleContent
   134KB - 2 com.intellij.openapi.vcs.changes.ChangesViewDiffPreviewProcessor
   133KB - 1 com.intellij.execution.impl.RunManagerImpl
   120KB - 3 com.intellij.openapi.vcs.changes.ChangesViewManager$ChangesViewToolWindowPanel
   103KB - 1 com.intellij.analysis.problemsView.toolWindow.HighlightingPanel
  87.3KB - 1 com.jetbrains.jsonSchema.impl.JsonSchemaServiceImpl
  68.5KB - 1 com.intellij.openapi.progress.impl.BackgroundableProcessIndicator
  64.5KB - 1 com.intellij.psi.impl.PsiElementFactoryImpl
  50.1KB - 2 com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl$PsiAwareTextEditorComponent
  32.0KB - 2 com.codota.intellij.lean.assistant.completion.InvocationContextHelper
[...removed 36 lines...]

Disposed but still strong-referenced objects: 2144 com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl, most common paths from GC-roots:
Ignored 416 too-deep objects
Root 1:
[  837/ 48%/67.7KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[  837/ 48%/67.7KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[  837/ 48%/67.7KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[  837/ 48%/67.7KB]  619MB          1   java.lang.Object[]
[  837/ 48%/67.7KB]  315MB          3   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[  837/ 48%/67.7KB]  315MB          3   com.intellij.openapi.util.Ref
[  837/ 48%/67.7KB]  315MB          3   com.intellij.openapi.wm.impl.ToolWindowImpl
[  837/ 48%/67.7KB]  315MB          3   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[  743/ 42%/60.1KB] 40.0MB          2 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[  743/ 42%/60.1KB] 8.26MB          2   java.util.concurrent.ConcurrentHashMap
[  743/ 42%/60.1KB] 8.26MB          2   java.util.concurrent.ConcurrentHashMap$Node[]
[  743/ 42%/60.1KB]  6.6MB          2   java.util.concurrent.ConcurrentHashMap$Node
[  743/ 42%/60.1KB]  6.6MB          2 ! com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[  743/ 42%/60.1KB]  6.6MB          2   com.intellij.util.containers.SLRUMap
[  743/ 42%/60.1KB]  6.6MB          2   com.intellij.util.containers.SLRUMap$1
[  743/ 42%/60.1KB]  6.6MB          2   com.intellij.util.containers.hash.LinkedHashMap$Entry
[  743/ 42%/60.1KB] 6.59MB          2   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[  743/ 42%/60.1KB] 6.59MB          2   java.util.LinkedHashMap
[  415/ 24%/33.6KB]  3.2MB          1   +-java.util.LinkedHashMap$Entry
[  415/ 24%/33.6KB] 3.18MB          1   | com.intellij.codeInsight.daemon.problems.ScopedMember
[  415/ 24%/33.6KB] 3.18MB          1   | com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[  415/ 24%/33.6KB] 3.18MB          1   | com.intellij.psi.search.GlobalSearchScope$UnionScope
[  415/ 24%/33.6KB] 3.18MB          1   | com.intellij.psi.search.GlobalSearchScope[]
[  415/ 24%/33.6KB] 3.18MB          1   | com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[  415/ 24%/33.6KB] 3.18MB          1   | java.util.LinkedHashSet
[  415/ 24%/33.6KB] 3.18MB          1   | java.util.LinkedHashMap
[  415/ 24%/33.6KB] 3.18MB          1   | java.util.LinkedHashMap$Entry
[  415/ 24%/33.6KB] 3.18MB          1 ! | com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[  415/ 24%/33.6KB] 3.12MB          1   | com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[  343/ 19%/27.7KB]  556KB          1   | java.util.concurrent.atomic.AtomicReference
[  343/ 19%/27.7KB]  556KB          1   | com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[  343/ 19%/27.7KB]  556KB          1   | com.intellij.workspaceModel.storage.impl.ValuesCache
[  343/ 19%/27.7KB]  556KB          1   | com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[  343/ 19%/27.7KB]  556KB          1   | com.github.benmanes.caffeine.cache.UnboundedLocalCache
[  343/ 19%/27.7KB]  555KB          1   | java.util.concurrent.ConcurrentHashMap
[  343/ 19%/27.7KB]  555KB          1   | java.util.concurrent.ConcurrentHashMap$Node[]
[  343/ 19%/27.7KB]  544KB        343   | java.util.concurrent.ConcurrentHashMap$Node
[  343/ 19%/27.7KB]  433KB        343   | com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryStateSnapshot
[  343/ 19%/27.7KB] 54.8KB        343 * | com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)
[  328/ 18%/26.5KB] 3.38MB          1   \-java.util.HashMap$TreeNode
[  328/ 18%/26.5KB] 3.28MB          1     com.intellij.codeInsight.daemon.problems.ScopedMember
[  328/ 18%/26.5KB] 3.28MB          1     com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[  328/ 18%/26.5KB] 3.28MB          1     com.intellij.psi.search.GlobalSearchScope$UnionScope
[  328/ 18%/26.5KB] 3.28MB          1     com.intellij.psi.search.GlobalSearchScope[]
[  328/ 18%/26.5KB] 3.28MB          1     com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[  328/ 18%/26.5KB] 3.28MB          1     java.util.LinkedHashSet
[  328/ 18%/26.5KB] 3.28MB          1     java.util.LinkedHashMap
[  328/ 18%/26.5KB] 3.28MB          1     java.util.LinkedHashMap$Entry
[  328/ 18%/26.5KB] 3.28MB          1 !   com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[  328/ 18%/26.5KB] 3.24MB          1     com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[  243/ 14%/19.6KB]  456KB          1     java.util.concurrent.atomic.AtomicReference
[  243/ 14%/19.6KB]  456KB          1     com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[  243/ 14%/19.6KB]  456KB          1     com.intellij.workspaceModel.storage.impl.ValuesCache
[  243/ 14%/19.6KB]  455KB          1     com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[  243/ 14%/19.6KB]  455KB          1     com.github.benmanes.caffeine.cache.UnboundedLocalCache
[  243/ 14%/19.6KB]  455KB          1     java.util.concurrent.ConcurrentHashMap
[  243/ 14%/19.6KB]  455KB          1     java.util.concurrent.ConcurrentHashMap$Node[]
[  243/ 14%/19.6KB]  430KB        243     java.util.concurrent.ConcurrentHashMap$Node
[  243/ 14%/19.6KB]  313KB        243     com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryStateSnapshot
[  243/ 14%/19.6KB] 44.7KB        243 *   com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)
Root 2:
[  301/ 17%/24.3KB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[  301/ 17%/24.3KB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[  301/ 17%/24.3KB] 36.0MB          1   java.util.HashMap
[  301/ 17%/24.3KB] 36.0MB          1   java.util.HashMap$Node[]
[  301/ 17%/24.3KB] 36.0MB          1   java.util.HashMap$Node
[  301/ 17%/24.3KB] 36.0MB          1   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[  301/ 17%/24.3KB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[  301/ 17%/24.3KB]  7.9MB          1   com.intellij.util.EventDispatcher
[  301/ 17%/24.3KB]  7.9MB          1   com.intellij.util.containers.DisposableWrapperList
[  301/ 17%/24.3KB]  7.9MB          1   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[  301/ 17%/24.3KB]  7.9MB          1   java.lang.Object[]
[  301/ 17%/24.3KB]  7.9MB          1   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[  301/ 17%/24.3KB]  7.9MB          1   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[  301/ 17%/24.3KB]  4.0MB          1 ! com.intellij.execution.ui.RunContentDescriptor (disposed)
[  301/ 17%/24.3KB] 3.14MB          1   com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[  301/ 17%/24.3KB] 3.14MB          1 ! com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[  301/ 17%/24.3KB] 2.67MB          1 ! com.intellij.javaee.appServers.run.configuration.view.JavaeeConsoleViewImpl (disposed)
[  301/ 17%/24.3KB]  2.6MB          1 ! com.intellij.execution.impl.ConsoleViewImpl (disposed)
[  301/ 17%/24.3KB] 2.45MB          1   com.intellij.openapi.module.impl.scopes.ModuleWithDependenciesScope
[  301/ 17%/24.3KB] 2.45MB          1 ! com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[  301/ 17%/24.3KB] 2.41MB          1   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[  301/ 17%/24.3KB]  407KB          1   java.util.concurrent.atomic.AtomicReference
[  301/ 17%/24.3KB]  407KB          1   com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[  301/ 17%/24.3KB]  407KB          1   com.intellij.workspaceModel.storage.impl.ValuesCache
[  301/ 17%/24.3KB]  406KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[  301/ 17%/24.3KB]  406KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache
[  301/ 17%/24.3KB]  406KB          1   java.util.concurrent.ConcurrentHashMap
[  301/ 17%/24.3KB]  406KB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[  301/ 17%/24.3KB]  214KB        108   java.util.concurrent.ConcurrentHashMap$Node
[  194/ 11%/15.7KB] 33.8KB          1   com.intellij.openapi.roots.libraries.Library[]
[  194/ 11%/15.7KB] 31.4KB        194 * com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)
Root 3:
[  301/ 17%/24.3KB] 83.4MB          1   ROOT: Static field: com.intellij.ui.mac.touchbar.TouchBarsManager.ourStack
[  301/ 17%/24.3KB] 83.4MB          1   com.intellij.ui.mac.touchbar.StackTouchBars
[  301/ 17%/24.3KB] 83.4MB          1   java.util.ArrayDeque
[  301/ 17%/24.3KB] 83.4MB          1   java.lang.Object[]
[  301/ 17%/24.3KB] 83.4MB          1   com.intellij.ui.mac.touchbar.BarContainer
[  301/ 17%/24.3KB] 83.4MB          1   com.intellij.find.SearchReplaceComponent
[  301/ 17%/24.3KB] 6.86MB          1 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[  301/ 17%/24.3KB] 3.39MB          1   java.util.concurrent.ConcurrentHashMap
[  301/ 17%/24.3KB] 3.39MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[  301/ 17%/24.3KB] 2.46MB          1   java.util.concurrent.ConcurrentHashMap$Node
[  301/ 17%/24.3KB] 2.46MB          1 ! com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[  301/ 17%/24.3KB] 2.46MB          1   com.intellij.util.containers.SLRUMap
[  301/ 17%/24.3KB] 2.31MB          1   com.intellij.util.containers.SLRUMap$1
[  301/ 17%/24.3KB] 2.31MB          1   com.intellij.util.containers.hash.LinkedHashMap$Entry
[  301/ 17%/24.3KB] 2.31MB          1   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[  301/ 17%/24.3KB] 2.31MB          1   java.util.LinkedHashMap
[  301/ 17%/24.3KB]  2.3MB          1   java.util.LinkedHashMap$Entry
[  301/ 17%/24.3KB] 2.29MB          1   com.intellij.codeInsight.daemon.problems.ScopedMember
[  301/ 17%/24.3KB] 2.29MB          1   com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[  301/ 17%/24.3KB] 2.29MB          1   com.intellij.psi.search.GlobalSearchScope$UnionScope
[  301/ 17%/24.3KB] 2.29MB          1   com.intellij.psi.search.GlobalSearchScope[]
[  301/ 17%/24.3KB] 2.29MB          1   com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[  301/ 17%/24.3KB] 2.29MB          1   java.util.LinkedHashSet
[  301/ 17%/24.3KB] 2.29MB          1   java.util.LinkedHashMap
[  301/ 17%/24.3KB] 2.29MB          1   java.util.LinkedHashMap$Entry
[  301/ 17%/24.3KB] 2.29MB          1 ! com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[  301/ 17%/24.3KB] 2.25MB          1   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[  301/ 17%/24.3KB]  416KB          1   java.util.concurrent.atomic.AtomicReference
[  301/ 17%/24.3KB]  416KB          1   com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[  301/ 17%/24.3KB]  416KB          1   com.intellij.workspaceModel.storage.impl.ValuesCache
[  301/ 17%/24.3KB]  416KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[  301/ 17%/24.3KB]  416KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache
[  301/ 17%/24.3KB]  416KB          1   java.util.concurrent.ConcurrentHashMap
[  301/ 17%/24.3KB]  416KB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[  301/ 17%/24.3KB]  201KB         93   java.util.concurrent.ConcurrentHashMap$Node
[  209/ 12%/16.9KB] 41.1KB          1   com.intellij.openapi.roots.libraries.Library[]
[  209/ 12%/16.9KB] 38.7KB        209 * com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)
Root 4:
[  195/ 11%/15.7KB] 3.88MB          1   ROOT: Static field: com.codota.intellij.common.completion.CompletionsListenerHelper.INSTANCE
[  195/ 11%/15.7KB] 3.88MB          1   com.codota.intellij.common.completion.CompletionsListenerHelper
[  195/ 11%/15.7KB] 3.88MB          1   com.codota.intellij.lean.assistant.completion.local.stories.StoryCompletionLookupListener
[  195/ 11%/15.7KB] 3.88MB          1   com.codota.intellij.common.completion.CompletionEvents$AnonymousEventData
[  195/ 11%/15.7KB] 3.88MB          1 ! com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[  195/ 11%/15.7KB] 2.23MB          1   java.util.concurrent.ConcurrentHashMap
[  195/ 11%/15.7KB] 2.23MB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[  195/ 11%/15.7KB] 1.43MB          1   java.util.concurrent.ConcurrentHashMap$Node
[  195/ 11%/15.7KB] 1.43MB          1 ! com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[  195/ 11%/15.7KB] 1.43MB          1   com.intellij.util.containers.SLRUMap
[  195/ 11%/15.7KB] 1.43MB          1   com.intellij.util.containers.SLRUMap$2
[  195/ 11%/15.7KB] 1.43MB          1   com.intellij.util.containers.hash.LinkedHashMap$Entry
[  195/ 11%/15.7KB] 1.43MB          1   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[  195/ 11%/15.7KB] 1.43MB          1   java.util.LinkedHashMap
[  195/ 11%/15.7KB] 1.43MB          1   java.util.LinkedHashMap$Entry
[  195/ 11%/15.7KB] 1.43MB          1   com.intellij.codeInsight.daemon.problems.ScopedMember
[  195/ 11%/15.7KB] 1.42MB          1   com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[  195/ 11%/15.7KB] 1.42MB          1   com.intellij.psi.search.GlobalSearchScope$UnionScope
[  195/ 11%/15.7KB] 1.42MB          1   com.intellij.psi.search.GlobalSearchScope[]
[  195/ 11%/15.7KB] 1.42MB          1   com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[  195/ 11%/15.7KB] 1.42MB          1   java.util.LinkedHashSet
[  195/ 11%/15.7KB] 1.42MB          1   java.util.LinkedHashMap
[  195/ 11%/15.7KB] 1.42MB          1   java.util.LinkedHashMap$Entry
[  195/ 11%/15.7KB] 1.42MB          1 ! com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[  195/ 11%/15.7KB] 1.38MB          1   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[  195/ 11%/15.7KB]  273KB          1   java.util.concurrent.atomic.AtomicReference
[  195/ 11%/15.7KB]  273KB          1   com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[  195/ 11%/15.7KB]  273KB          1   com.intellij.workspaceModel.storage.impl.ValuesCache
[  195/ 11%/15.7KB]  273KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[  195/ 11%/15.7KB]  273KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache
[  195/ 11%/15.7KB]  273KB          1   java.util.concurrent.ConcurrentHashMap
[  195/ 11%/15.7KB]  273KB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[  195/ 11%/15.7KB]  177KB         98   java.util.concurrent.ConcurrentHashMap$Node
[   98/  5%/7.93KB] 19.6KB          1   com.intellij.openapi.roots.libraries.Library[]
[   98/  5%/7.93KB] 18.0KB         98 * com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)
Root 5:
[   94/  5%/7.61KB] 78.5MB          1   ROOT: Static field: java.awt.KeyboardFocusManager.newFocusOwner
[   94/  5%/7.61KB] 78.5MB          1   com.intellij.execution.testframework.sm.runner.ui.SMTRunnerTestTreeView
[   94/  5%/7.61KB] 78.4MB          1 ! com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm (disposed)
[   94/  5%/7.61KB] 1.38MB          1 ! com.intellij.execution.testframework.ui.TestsConsoleViewImpl (disposed)
[   94/  5%/7.61KB]  1.2MB          1   com.intellij.openapi.module.impl.scopes.ModuleWithDependenciesScope
[   94/  5%/7.61KB] 1.18MB          1 ! com.intellij.workspaceModel.ide.impl.legacyBridge.module.ModuleBridgeImpl (disposed)
[   94/  5%/7.61KB] 1.02MB          1   com.intellij.workspaceModel.storage.impl.VersionedEntityStorageImpl
[   94/  5%/7.61KB]  134KB          1   java.util.concurrent.atomic.AtomicReference
[   94/  5%/7.61KB]  134KB          1   com.intellij.workspaceModel.storage.impl.StorageSnapshotCache
[   94/  5%/7.61KB]  134KB          1   com.intellij.workspaceModel.storage.impl.ValuesCache
[   94/  5%/7.61KB]  133KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache$UnboundedLocalManualCache
[   94/  5%/7.61KB]  133KB          1   com.github.benmanes.caffeine.cache.UnboundedLocalCache
[   94/  5%/7.61KB]  133KB          1   java.util.concurrent.ConcurrentHashMap
[   94/  5%/7.61KB]  133KB          1   java.util.concurrent.ConcurrentHashMap$Node[]
[   94/  5%/7.61KB] 56.4KB         30   java.util.concurrent.ConcurrentHashMap$Node
[   65/  3%/5.26KB] 12.7KB          1   com.intellij.openapi.roots.libraries.Library[]
[   65/  3%/5.26KB] 12.0KB         65 * com.intellij.workspaceModel.ide.impl.legacyBridge.library.LibraryBridgeImpl (disposed)

Disposed but still strong-referenced objects: 8 com.intellij.ui.BalloonImpl, most common paths from GC-roots:
Root 1:
[    6/ 75%/ 1.9KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[    6/ 75%/ 1.9KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[    6/ 75%/ 1.9KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[    6/ 75%/ 1.9KB]  619MB          1   java.lang.Object[]
[    6/ 75%/ 1.9KB]  390MB          6   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[    6/ 75%/ 1.9KB]  390MB          6   com.intellij.openapi.util.Ref
[    6/ 75%/ 1.9KB]  390MB          6   com.intellij.openapi.wm.impl.ToolWindowImpl
[    6/ 75%/ 1.9KB]  390MB          6   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[    5/ 62%/1.59KB] 9.79MB          5   +-java.util.HashMap
[    5/ 62%/1.59KB] 9.79MB          5   | java.util.HashMap$Node[]
[    5/ 62%/1.59KB] 3.47MB          5   | java.util.HashMap$Node
[    5/ 62%/1.59KB] 3.47MB          5   | com.intellij.openapi.wm.impl.ToolWindowEntry
[    5/ 62%/1.59KB] 3.32MB          5   | com.intellij.openapi.wm.impl.ToolWindowImpl
[    5/ 62%/1.59KB] 2.42MB          5   | com.intellij.openapi.wm.impl.content.ToolWindowContentUi
[    5/ 62%/1.59KB] 2.37MB          5   | com.intellij.ui.content.impl.ContentManagerImpl$MyNonOpaquePanel
[    5/ 62%/1.59KB] 2.35MB          5   | java.awt.BorderLayout
[    5/ 62%/1.59KB] 2.35MB          5   | com.intellij.build.MultipleBuildsView$MultipleBuildsPanel
[    5/ 62%/1.59KB] 2.33MB          5 ! | com.intellij.build.MultipleBuildsView (disposed)
[    5/ 62%/1.59KB] 2.28MB          5   | com.intellij.ui.OnePixelSplitter
[    5/ 62%/1.59KB] 2.27MB          5 ! | com.intellij.build.BuildView (disposed)
[    5/ 62%/1.59KB] 1.34MB          5   | com.intellij.build.AbstractViewManager$BuildInfo
[    5/ 62%/1.59KB] 1.33MB          5   | com.intellij.util.SmartList
[    5/ 62%/1.59KB] 1.33MB          5   | java.lang.Object[]
[    5/ 62%/1.59KB] 1.33MB          5   | com.intellij.compiler.progress.BuildOutputService$3
[    5/ 62%/1.59KB]  363KB          5 ! | com.intellij.openapi.progress.impl.BackgroundableProcessIndicator (disposed)
[    5/ 62%/1.59KB]  267KB          5   | com.intellij.openapi.wm.ex.ProgressIndicatorEx[]
[    5/ 62%/1.59KB]  179KB          5 ! | com.intellij.openapi.wm.impl.status.InfoAndProgressPanel$MyInlineProgressIndicator (disposed)
[    5/ 62%/1.59KB] 42.6KB          5 * | com.intellij.ui.BalloonImpl (disposed)
[    1/ 12%/  318B]  100MB          1   \-com.intellij.openapi.wm.impl.ToolWindowsPane
[    1/ 12%/  318B] 95.9MB          1     com.intellij.ui.components.JBPanel
[    1/ 12%/  318B]  108KB          1     java.awt.BorderLayout
[    1/ 12%/  318B]  106KB          1 !   com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[    1/ 12%/  318B]  102KB          1 !   com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[    1/ 12%/  318B] 40.7KB          1     com.intellij.openapi.wm.impl.status.InfoAndProgressPanel$InlineProgressPanel
[    1/ 12%/  318B] 37.7KB          1 !   com.intellij.openapi.wm.impl.status.InfoAndProgressPanel$MyInlineProgressIndicator (disposed)
[    1/ 12%/  318B] 9.27KB          1 *   com.intellij.ui.BalloonImpl (disposed)
Root 2:
[    1/ 12%/  318B] 97.8MB          1   ROOT: Static field: com.codota.intellij.lean.assistant.completion.local.CompletionHints.preInsertionHintComponent
[    1/ 12%/  318B] 97.8MB          1   com.codota.intellij.lean.assistant.completion.local.CodotaHintLabel
[    1/ 12%/  318B] 97.8MB          1   com.intellij.ui.components.panels.Wrapper
[    1/ 12%/  318B] 97.8MB          1   javax.swing.JPanel
[    1/ 12%/  318B] 97.8MB          1   com.intellij.ui.BalloonImpl$MyComponent
[    1/ 12%/  318B] 96.7MB          1 * com.intellij.ui.BalloonImpl (disposed)

Disposed but still strong-referenced objects: 1985 com.intellij.util.messages.impl.MessageBusConnectionImpl, most common paths from GC-roots:
Ignored 1129 too-deep objects
Root 1:
[  615/ 71%/19.6KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[  615/ 71%/19.6KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[  615/ 71%/19.6KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[  615/ 71%/19.6KB]  619MB          1   java.lang.Object[]
[  316/ 36%/10.1KB] 3.71MB         35   +-com.intellij.util.messages.impl.MessageBusConnectionImpl
[  316/ 36%/10.1KB] 3.71MB         35 ! | com.intellij.util.messages.impl.CompositeMessageBus (disposed)
[  316/ 36%/10.1KB] 24.4KB         35   | java.util.concurrent.ConcurrentLinkedQueue
[  316/ 36%/10.1KB] 23.6KB         70   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  248/ 28%/7.93KB] 18.6KB         36   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  212/ 24%/6.78KB] 16.1KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  177/ 20%/5.66KB] 13.5KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  142/ 16%/4.54KB] 11.0KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  107/ 12%/3.42KB] 8.54KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[  105/ 12%/3.36KB]  7.6KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[   72/  8%/ 2.3KB] 5.18KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[   37/  4%/1.18KB] 2.66KB         35   | java.util.concurrent.ConcurrentLinkedQueue$Node
[   35/  4%/1.12KB] 1.68KB         35 * | com.intellij.util.messages.impl.MessageBusConnectionImpl (disposed)
[  299/ 34%/9.56KB]  493MB          6   \-cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[  299/ 34%/9.56KB]  493MB          6     com.intellij.openapi.util.Ref
[  299/ 34%/9.56KB]  493MB          6     com.intellij.openapi.wm.impl.ToolWindowImpl
[  299/ 34%/9.56KB]  493MB          6     com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[  252/ 29%/8.06KB]  431MB          6     +-com.intellij.openapi.wm.impl.ToolWindowsPane
[  252/ 29%/8.06KB] 4.41MB          6     | com.intellij.openapi.ui.ThreeComponentsSplitter
[  252/ 29%/8.06KB] 4.39MB          6     | com.intellij.openapi.fileEditor.impl.EditorsSplitters
[  252/ 29%/8.06KB] 4.28MB          6 !   | com.jetbrains.rdserver.editors.BackendServerFileEditorManager (disposed)
[  252/ 29%/8.06KB] 4.24MB          6     | com.intellij.util.messages.impl.MessageListenerList
[  252/ 29%/8.06KB] 4.24MB          6 !   | com.intellij.util.messages.impl.CompositeMessageBus (disposed)
[  252/ 29%/8.06KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue
[  252/ 29%/8.06KB] 4.19MB          7     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  245/ 28%/7.84KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  243/ 28%/7.77KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  240/ 28%/7.68KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  234/ 27%/7.48KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  230/ 26%/7.36KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  226/ 26%/7.23KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  221/ 25%/7.07KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  216/ 25%/6.91KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  211/ 24%/6.75KB] 4.19MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  207/ 24%/6.62KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  201/ 23%/6.43KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  196/ 22%/6.27KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  191/ 22%/6.11KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  186/ 21%/5.95KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  181/ 21%/5.79KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  175/ 20%/ 5.6KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  170/ 19%/5.44KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  165/ 19%/5.28KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  161/ 18%/5.15KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  156/ 18%/4.99KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  153/ 17%/4.89KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  149/ 17%/4.76KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  145/ 16%/4.64KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  142/ 16%/4.54KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  138/ 16%/4.41KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  133/ 15%/4.25KB] 4.18MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  129/ 15%/4.12KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  125/ 14%/ 4.0KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  121/ 14%/3.87KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  117/ 13%/3.74KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  113/ 13%/3.61KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  109/ 12%/3.48KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  106/ 12%/3.39KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  102/ 11%/3.26KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[  100/ 11%/ 3.2KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   97/ 11%/ 3.1KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   93/ 10%/2.97KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   90/ 10%/2.88KB] 4.17MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   88/ 10%/2.81KB] 4.16MB          6     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   84/  9%/2.68KB] 4.16MB          5     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   81/  9%/2.59KB] 4.16MB          5     | java.util.concurrent.ConcurrentLinkedQueue$Node
[   77/  8%/2.46KB] 4.16MB          5     | java.util.concurrent.ConcurrentLinkedQueue$Node
[...removed 58 lines...]
[    2/  0%/   64B] 7.83MB          1         com.intellij.debugger.engine.JavaDebugProcess
[    2/  0%/   64B] 3.66MB          1         com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[    2/  0%/   64B] 3.65MB          1         com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[    2/  0%/   64B] 3.63MB          1         com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[    1/  0%/   32B]    48B          1 *       com.intellij.util.messages.impl.MessageBusConnectionImpl (disposed)
Root 2:
[   62/  7%/1.98KB]  217KB          1   ROOT: Static field: com.github.restful.tool.utils.RequestUtil$Custom.REQUEST_CACHE
[   62/  7%/1.98KB]  217KB          1   java.util.HashMap
[   62/  7%/1.98KB]  217KB          1   java.util.HashMap$Node[]
[   62/  7%/1.98KB]  217KB          1   java.util.HashMap$Node
[   62/  7%/1.98KB]  217KB          1   com.intellij.psi.impl.source.PsiMethodImpl
[   62/  7%/1.98KB]  215KB          1   com.intellij.psi.impl.source.SpineRef
[   62/  7%/1.98KB]  215KB          1   com.intellij.psi.impl.source.PsiJavaFileImpl
[   61/  7%/1.95KB]  191KB          1 ! com.intellij.psi.impl.PsiManagerImpl (disposed)
[   60/  7%/1.92KB] 36.1KB          1   com.intellij.psi.impl.PsiModificationTrackerImpl
[   60/  7%/1.92KB] 34.1KB          1   com.sun.proxy.$Proxy44
[   60/  7%/1.92KB] 34.1KB          1   com.intellij.util.messages.impl.MessageBusImpl$ToParentMessagePublisher
[   60/  7%/1.92KB] 34.1KB          1 ! com.intellij.util.messages.impl.CompositeMessageBus (disposed)
[   60/  7%/1.92KB] 24.8KB          1   java.util.concurrent.ConcurrentLinkedQueue
[   60/  7%/1.92KB] 24.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   59/  6%/1.88KB] 24.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   59/  6%/1.88KB] 24.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   58/  6%/1.85KB] 24.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   58/  6%/1.85KB] 24.5KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   57/  6%/1.82KB] 24.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   56/  6%/1.79KB] 24.3KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   56/  6%/1.79KB] 24.3KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   55/  6%/1.76KB] 24.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   54/  6%/1.72KB] 24.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   53/  6%/1.69KB] 24.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   52/  6%/1.66KB] 24.0KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   51/  5%/1.63KB] 23.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   50/  5%/ 1.6KB] 23.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   49/  5%/1.56KB] 23.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   48/  5%/1.53KB] 23.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   47/  5%/ 1.5KB] 23.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   46/  5%/1.47KB] 23.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   45/  5%/1.44KB] 23.5KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   44/  5%/ 1.4KB] 23.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   43/  5%/1.37KB] 23.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   42/  4%/1.34KB] 23.3KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   41/  4%/1.31KB] 23.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   40/  4%/1.28KB] 23.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   39/  4%/1.24KB] 23.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   38/  4%/1.21KB] 23.0KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   37/  4%/1.18KB] 22.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   36/  4%/1.15KB] 22.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   35/  4%/1.12KB] 22.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   34/  3%/1.08KB] 22.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   33/  3%/1.05KB] 22.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   32/  3%/1.02KB] 22.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   31/  3%/  992B] 22.5KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   30/  3%/  960B] 22.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   29/  3%/  928B] 22.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   28/  3%/  896B] 22.3KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   27/  3%/  864B] 22.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   26/  3%/  832B] 22.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   25/  2%/  800B] 22.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   24/  2%/  768B] 22.0KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   23/  2%/  736B] 21.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   22/  2%/  704B] 21.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   21/  2%/  672B] 21.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   20/  2%/  640B] 21.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   19/  2%/  608B] 21.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   18/  2%/  576B] 21.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   17/  1%/  544B] 21.5KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   16/  1%/  512B] 21.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   15/  1%/  480B] 21.4KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   14/  1%/  448B] 21.3KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   13/  1%/  416B] 21.2KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   12/  1%/  384B] 21.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   11/  1%/  352B] 21.1KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   10/  1%/  320B] 21.0KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   10/  1%/  320B] 20.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[   10/  1%/  320B] 20.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    9/  1%/  288B] 20.6KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    8/  0%/  256B] 20.5KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[...removed 5 lines...]
[    4/  0%/  128B] 19.9KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    3/  0%/   96B] 19.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    2/  0%/   64B] 19.8KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    2/  0%/   64B] 19.7KB          1   java.util.concurrent.ConcurrentLinkedQueue$Node
[    1/  0%/   32B]    48B          1 * com.intellij.util.messages.impl.MessageBusConnectionImpl (disposed)
Root 3:
[    9/  1%/  288B] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[    9/  1%/  288B] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[    9/  1%/  288B] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[    9/  1%/  288B] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[    8/  0%/  256B]  3.9MB          1 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[    6/  0%/  192B] 1.26MB          1   | java.util.concurrent.ConcurrentHashMap
[    6/  0%/  192B] 1.26MB          1   | java.util.concurrent.ConcurrentHashMap$Node[]
[    6/  0%/  192B] 7.36KB          3   | java.util.concurrent.ConcurrentHashMap$Node
[    4/  0%/  128B]   812B          1   | com.intellij.database.DataBus
[    4/  0%/  128B]   776B          1 ! | com.intellij.util.messages.impl.MessageBusImpl$RootBus (disposed)
[    4/  0%/  128B]   336B          1   | java.util.concurrent.ConcurrentLinkedQueue
[    4/  0%/  128B]   312B          2   | java.util.concurrent.ConcurrentLinkedQueue$Node
[    3/  0%/   96B]   216B          1   | java.util.concurrent.ConcurrentLinkedQueue$Node
[    2/  0%/   64B]   144B          1   | java.util.concurrent.ConcurrentLinkedQueue$Node
[    1/  0%/   32B]    72B          1   | java.util.concurrent.ConcurrentLinkedQueue$Node
[    1/  0%/   32B]    48B          1 * | com.intellij.util.messages.impl.MessageBusConnectionImpl (disposed)
[    1/  0%/   32B] 13.1MB          1   \-com.intellij.openapi.editor.impl.EditorFilteringMarkupModelEx
[    1/  0%/   32B] 13.1MB          1     com.intellij.openapi.editor.impl.MarkupModelImpl
[    1/  0%/   32B] 11.6MB          1     com.intellij.openapi.editor.impl.RangeHighlighterTree
[    1/  0%/   32B] 11.6MB          1     com.intellij.openapi.editor.impl.RangeHighlighterTree$RHNode
[    1/  0%/   32B] 9.57MB          1     com.intellij.util.SmartList
[    1/  0%/   32B] 9.57MB          1     com.intellij.openapi.util.StaticGetter
[    1/  0%/   32B] 9.57MB          1     com.intellij.openapi.editor.impl.PersistentRangeHighlighterImpl
[    1/  0%/   32B] 9.57MB          1     com.intellij.xdebugger.impl.breakpoints.XBreakpointBase$BreakpointGutterIconRenderer
[    1/  0%/   32B] 9.57MB          1     com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[    1/  0%/   32B] 30.1KB          1     com.intellij.util.keyFMap.OneElementFMap
[    1/  0%/   32B] 30.1KB          1     com.intellij.debugger.ui.breakpoints.LineBreakpoint
[    1/  0%/   32B] 29.9KB          1     com.intellij.debugger.SourcePosition$2
[    1/  0%/   32B] 29.8KB          1     com.intellij.psi.impl.source.PsiJavaFileImpl
[    1/  0%/   32B] 21.9KB          1     com.intellij.util.keyFMap.MapBackedFMap
[    1/  0%/   32B] 21.5KB          1     java.lang.Object[]
[    1/  0%/   32B] 18.4KB          1     com.intellij.psi.impl.PsiCachedValueImpl
[    1/  0%/   32B] 18.3KB          1     com.intellij.psi.util.CachedValuesManager$1
[    1/  0%/   32B] 18.3KB          1     com.intellij.application.options.codeStyle.cache.CodeStyleCachedValueProvider
[    1/  0%/   32B] 18.2KB          1     com.intellij.application.options.codeStyle.cache.CodeStyleCachedValueProvider$AsyncComputation
[    1/  0%/   32B] 17.3KB          1     com.intellij.psi.codeStyle.ProjectCodeStyleSettingsManager
[    1/  0%/   32B] 3.98KB          1     com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[    1/  0%/   32B] 3.96KB          1     java.lang.Object[]
[    1/  0%/   32B] 3.94KB          1 !   com.intellij.psi.codeStyle.statusbar.CodeStyleStatusBarWidget (disposed)
[    1/  0%/   32B]    48B          1 *   com.intellij.util.messages.impl.MessageBusConnectionImpl (disposed)

Disposed but still strong-referenced objects: 2 com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm, most common paths from GC-roots:
Root 1:
[    2/100%/1.58KB] 78.5MB          1   ROOT: Static field: java.awt.KeyboardFocusManager.newFocusOwner
[    2/100%/1.58KB] 78.5MB          1   com.intellij.execution.testframework.sm.runner.ui.SMTRunnerTestTreeView
[    2/100%/1.58KB] 78.4MB          1 ! com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm (disposed)
[    1/ 50%/  793B]  2.2MB          1 ! com.intellij.execution.testframework.sm.runner.SMTestProxy$SMRootTestProxy (disposed)
[    1/ 50%/  793B]  2.2MB          1   com.intellij.execution.process.KillableColoredProcessHandler$Silent
[    1/ 50%/  793B] 2.17MB          1   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[    1/ 50%/  793B] 2.17MB          1   java.lang.Object[]
[    1/ 50%/  793B] 2.17MB          1   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[    1/ 50%/  793B]  685KB          1 ! com.intellij.ui.content.impl.ContentImpl (disposed)
[    1/ 50%/  793B]  682KB          1   com.intellij.ui.content.impl.ContentManagerImpl$MyNonOpaquePanel
[    1/ 50%/  793B]  679KB          1   java.awt.BorderLayout
[    1/ 50%/  793B]  679KB          1   com.intellij.execution.ui.layout.impl.RunnerContentUi$MyComponent
[    1/ 50%/  793B]  678KB          1 ! com.intellij.execution.ui.layout.impl.RunnerContentUi (disposed)
[    1/ 50%/  793B]  520KB          1   com.intellij.execution.ui.layout.impl.RunnerContentUi$1
[    1/ 50%/  793B]  493KB          1   com.intellij.ui.tabs.TabInfo
[    1/ 50%/  793B]  473KB          1 ! com.intellij.execution.ui.layout.impl.GridImpl (disposed)
[    1/ 50%/  793B]  391KB          1   java.util.ArrayList
[    1/ 50%/  793B]  390KB          1   java.lang.Object[]
[    1/ 50%/  793B]  390KB          1 ! com.intellij.ui.content.impl.ContentImpl (disposed)
[    1/ 50%/  793B]  390KB          1 * com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm (disposed)

Disposed but still strong-referenced objects: 989 com.intellij.util.Alarm, most common paths from GC-roots:
Root 1:
[  520/ 52%/29.6KB] 36.0MB          1   ROOT: Static field: org.jetbrains.idea.tomcat.TomcatUrlMapping.INSTANCE
[  520/ 52%/29.6KB] 36.0MB          1   org.jetbrains.idea.tomcat.TomcatUrlMapping
[  520/ 52%/29.6KB] 36.0MB          1   java.util.HashMap
[  520/ 52%/29.6KB] 36.0MB          1   java.util.HashMap$Node[]
[  520/ 52%/29.6KB] 36.0MB          1   java.util.HashMap$Node
[  520/ 52%/29.6KB] 36.0MB          1   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[  520/ 52%/29.6KB] 35.9MB          1   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[  452/ 45%/25.7KB] 28.0MB          1   +-com.intellij.javaee.appServers.run.execution.PatchedLocalState$ScriptBasedLocalJavaeeServerProcessHandler
[  452/ 45%/25.7KB] 27.8MB          1   | com.intellij.javaee.appServers.run.execution.J2EEProcessHandlerHelper
[  452/ 45%/25.7KB] 27.8MB          1   | com.intellij.javaee.appServers.ex.openapi.impl.DeploymentManagerImpl
[  452/ 45%/25.7KB] 27.8MB          1   | java.util.HashMap
[  452/ 45%/25.7KB] 27.8MB          1   | java.util.HashMap$Node[]
[  452/ 45%/25.7KB] 27.8MB         10   | java.util.HashMap$Node
[  288/ 29%/16.4KB] 21.4MB          9   | +-com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[  288/ 29%/16.4KB] 21.3MB          9   | | com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[  288/ 29%/16.4KB] 21.2MB          9   | | com.intellij.util.EventDispatcher
[  288/ 29%/16.4KB] 21.2MB          9   | | com.intellij.util.containers.DisposableWrapperList
[  288/ 29%/16.4KB] 21.2MB          9   | | com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[  288/ 29%/16.4KB] 21.2MB          9   | | java.lang.Object[]
[  288/ 29%/16.4KB] 21.2MB          9   | | com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[  288/ 29%/16.4KB] 21.2MB          9   | | com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[  288/ 29%/16.4KB] 21.1MB          9 ! | | com.intellij.execution.ui.RunContentDescriptor (disposed)
[  203/ 20%/11.5KB] 7.85MB          9 ! | | +-com.intellij.execution.ui.layout.impl.RunnerLayoutUiImpl (disposed)
[  203/ 20%/11.5KB] 7.82MB          9 ! | | | com.intellij.execution.ui.layout.impl.RunnerContentUi (disposed)
[  105/ 10%/5.98KB] 4.23MB          8   | | | com.intellij.openapi.actionSystem.DefaultActionGroup
[  105/ 10%/5.98KB] 4.22MB          8   | | | com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[  105/ 10%/5.98KB] 4.22MB          8   | | | java.lang.Object[]
[  105/ 10%/5.98KB] 3.89MB         31   | | | com.intellij.execution.ui.layout.actions.RestoreViewAction
[  105/ 10%/5.98KB] 3.89MB         31 ! | | | com.intellij.ui.content.impl.ContentImpl (disposed)
[   64/  6%/3.64KB]  455KB         16 ! | | | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[   64/  6%/3.64KB] 19.5KB         64 * | | | com.intellij.util.Alarm (disposed)
[   85/  8%/4.84KB] 13.3MB          7   | | \-com.intellij.xdebugger.impl.ui.XDebugSessionTab$$Lambda$9928
[   85/  8%/4.84KB] 13.3MB          7 ! | |   com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[   51/  5%/ 2.9KB] 3.19MB          7 ! | |   +-com.intellij.javaee.appServers.run.configuration.view.JavaeeConsoleViewImpl (disposed)
[   44/  4%/ 2.5KB] 2.73MB          7 ! | |   | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[   28/  2%/1.59KB] 8.56KB         28 * | |   | com.intellij.util.Alarm (disposed)
[   13/  1%/  741B] 7.21MB          7 ! | |   \-com.intellij.xdebugger.impl.frame.XWatchesViewImpl (disposed)
[   13/  1%/  741B]  701KB          7   | |     com.intellij.util.ui.components.BorderLayoutPanel
[   13/  1%/  741B]  451KB          7   | |     com.intellij.execution.ui.layout.impl.GridCellImpl$ProviderWrapper
[   13/  1%/  741B]  440KB          7   | |     com.intellij.execution.ui.layout.impl.GridCellImpl$GridCellTabs
[    7/  0%/  399B] 57.5KB          7 ! | |     com.intellij.ui.tabs.layout.singleRowLayout.ScrollableSingleRowLayout (disposed)
[    7/  0%/  399B]   812B          7 * | |     com.intellij.util.Alarm (disposed)
[  164/ 16%/9.34KB] 6.42MB          4   | \-java.util.HashMap$Node
[  136/ 13%/7.75KB] 5.49MB          4   |   com.intellij.javaee.oss.server.JavaeeServerInstanceImpl
[  136/ 13%/7.75KB] 5.46MB          4   |   com.intellij.javaee.appServers.run.execution.J2EELocalProcessHandlerWrapper
[  136/ 13%/7.75KB]  5.4MB          4   |   com.intellij.util.EventDispatcher
[  136/ 13%/7.75KB]  5.4MB          4   |   com.intellij.util.containers.DisposableWrapperList
[  136/ 13%/7.75KB]  5.4MB          4   |   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[  136/ 13%/7.75KB]  5.4MB          4   |   java.lang.Object[]
[  136/ 13%/7.75KB]  5.4MB          4   |   com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[  136/ 13%/7.75KB]  5.4MB          4   |   com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[  136/ 13%/7.75KB]  5.4MB          4 ! |   com.intellij.execution.ui.RunContentDescriptor (disposed)
[   87/  8%/4.95KB] 2.53MB          4 ! |   com.intellij.execution.ui.layout.impl.RunnerLayoutUiImpl (disposed)
[   87/  8%/4.95KB] 2.52MB          4 ! |   com.intellij.execution.ui.layout.impl.RunnerContentUi (disposed)
[   51/  5%/ 2.9KB] 1.23MB          4   |   com.intellij.openapi.actionSystem.DefaultActionGroup
[   51/  5%/ 2.9KB] 1.23MB          4   |   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[   51/  5%/ 2.9KB] 1.23MB          4   |   java.lang.Object[]
[   51/  5%/ 2.9KB] 1.04MB         16   |   com.intellij.execution.ui.layout.actions.RestoreViewAction
[   51/  5%/ 2.9KB] 1.04MB         16 ! |   com.intellij.ui.content.impl.ContentImpl (disposed)
[   32/  3%/1.82KB]  227KB          8 ! |   com.intellij.execution.impl.ConsoleViewImpl (disposed)
[   32/  3%/1.82KB] 9.79KB         32 * |   com.intellij.util.Alarm (disposed)
[   68/  6%/3.87KB]  7.9MB          1   \-com.intellij.util.EventDispatcher
[   68/  6%/3.87KB]  7.9MB          1     com.intellij.util.containers.DisposableWrapperList
[   68/  6%/3.87KB]  7.9MB          1     com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[   68/  6%/3.87KB]  7.9MB          1     java.lang.Object[]
[   68/  6%/3.87KB]  7.9MB          1     com.intellij.util.containers.DisposableWrapperList$DisposableWrapper
[   68/  6%/3.87KB]  7.9MB          1     com.intellij.execution.ui.RunContentManagerImpl$showRunContent$processAdapter$1
[   34/  3%/1.93KB]  4.0MB          1 !   com.intellij.execution.ui.RunContentDescriptor (disposed)
[   22/  2%/1.25KB]  867KB          1 !   com.intellij.execution.ui.layout.impl.RunnerLayoutUiImpl (disposed)
[   22/  2%/1.25KB]  864KB          1 !   com.intellij.execution.ui.layout.impl.RunnerContentUi (disposed)
[   13/  1%/  741B]  518KB          1     com.intellij.openapi.actionSystem.DefaultActionGroup
[   13/  1%/  741B]  517KB          1     com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[   13/  1%/  741B]  517KB          1     java.lang.Object[]
[   13/  1%/  741B]  472KB          4     com.intellij.execution.ui.layout.actions.RestoreViewAction
[   13/  1%/  741B]  472KB          4 !   com.intellij.ui.content.impl.ContentImpl (disposed)
[    8/  0%/  456B] 56.8KB          2 !   com.intellij.execution.impl.ConsoleViewImpl (disposed)
[    8/  0%/  456B] 2.44KB          8 *   com.intellij.util.Alarm (disposed)
Root 2:
[  318/ 32%/18.1KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[  318/ 32%/18.1KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[  318/ 32%/18.1KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[  318/ 32%/18.1KB]  619MB          1   java.lang.Object[]
[  318/ 32%/18.1KB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[  318/ 32%/18.1KB]  566MB          9   com.intellij.openapi.util.Ref
[  318/ 32%/18.1KB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[  318/ 32%/18.1KB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[  145/ 14%/8.26KB] 14.9MB          8   +-java.util.HashMap
[  145/ 14%/8.26KB] 14.9MB          8   | java.util.HashMap$Node[]
[  145/ 14%/8.26KB] 5.42MB         11   | java.util.HashMap$Node
[  145/ 14%/8.26KB]  5.2MB         11   | com.intellij.openapi.wm.impl.ToolWindowEntry
[  145/ 14%/8.26KB] 4.87MB         11   | com.intellij.openapi.wm.impl.ToolWindowImpl
[  101/ 10%/5.75KB] 3.35MB         11   | com.intellij.openapi.wm.impl.content.ToolWindowContentUi
[   91/  9%/5.18KB] 3.03MB         11   | com.intellij.ui.content.impl.ContentManagerImpl$MyNonOpaquePanel
[   91/  9%/5.18KB] 2.99MB         11   | java.awt.BorderLayout
[   87/  8%/4.95KB]  2.9MB          7   | com.intellij.build.MultipleBuildsView$MultipleBuildsPanel
[   87/  8%/4.95KB] 2.87MB          7 ! | com.intellij.build.MultipleBuildsView (disposed)
[   87/  8%/4.95KB] 2.79MB          7   | com.intellij.ui.OnePixelSplitter
[   87/  8%/4.95KB] 2.78MB          7 ! | com.intellij.build.BuildView (disposed)
[   82/  8%/4.67KB] 1.17MB          7 ! | com.intellij.build.BuildTextConsoleView (disposed)
[   47/  4%/2.67KB]  667KB          7 ! | com.intellij.build.BuildTreeConsoleView$ConsoleViewHandler$1 (disposed)
[   40/  4%/2.28KB]  519KB          7   | java.util.ArrayList
[   40/  4%/2.28KB]  518KB          7   | java.lang.Object[]
[   35/  3%/1.99KB]  403KB          7 ! | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[   28/  2%/1.59KB] 8.56KB         28 * | com.intellij.util.Alarm (disposed)
[  136/ 13%/7.75KB] 48.5MB          5 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[   69/  6%/3.93KB] 26.9MB          5   | +-com.intellij.openapi.extensions.impl.ExtensionsAreaImpl
[   69/  6%/3.93KB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap
[   69/  6%/3.93KB] 26.9MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[   69/  6%/3.93KB] 25.7MB          7   | | java.util.concurrent.ConcurrentHashMap$Node
[   69/  6%/3.93KB] 25.7MB          7   | | com.intellij.openapi.extensions.impl.InterfaceExtensionPoint
[   63/  6%/3.59KB] 25.7MB          1   | | com.intellij.ide.favoritesTreeView.FavoritesListProvider[]
[   63/  6%/3.59KB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.BreakpointsFavoriteListProvider
[   63/  6%/3.59KB] 25.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.ui.tree.BreakpointItemsTreeController
[   63/  6%/3.59KB] 25.7MB          1   | | java.util.HashMap
[   63/  6%/3.59KB] 25.7MB          1   | | java.util.HashMap$Node[]
[   63/  6%/3.59KB] 18.8MB          1   | | java.util.HashMap$Node
[   63/  6%/3.59KB] 18.8MB          1   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointItem
[   63/  6%/3.59KB] 18.8MB          1   | | com.intellij.xdebugger.impl.breakpoints.XLineBreakpointImpl
[   62/  6%/3.53KB] 15.7MB          1   | | com.intellij.xdebugger.impl.breakpoints.XBreakpointManagerImpl
[   62/  6%/3.53KB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.XDebuggerManagerImpl (disposed)
[   62/  6%/3.53KB] 15.7MB          1   | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager
[   62/  6%/3.53KB] 15.7MB          1 ! | | com.intellij.xdebugger.impl.pinned.items.XDebuggerPinToTopManager$onNodeHovered$changeIconLifetime$1 (disposed)
[   62/  6%/3.53KB] 15.7MB          1   | | com.intellij.xdebugger.impl.ui.tree.nodes.XValueNodeImpl
[   58/  5%/ 3.3KB] 8.16MB          1   | | com.intellij.debugger.engine.JavaValue
[   58/  5%/ 3.3KB] 7.84MB          1   | | com.intellij.debugger.engine.JavaDebugProcess$3
[   58/  5%/ 3.3KB] 7.83MB          1   | | com.intellij.debugger.engine.JavaDebugProcess
[   30/  3%/1.71KB] 4.16MB          1   | | com.intellij.xdebugger.impl.XDebugSessionImpl
[   21/  2%/1.19KB] 1.15MB          1 ! | | com.intellij.xdebugger.impl.ui.XDebugSessionTab (disposed)
[   12/  1%/  684B]  599KB          1   | | com.intellij.diagnostic.logging.LogFilesManager
[   12/  1%/  684B]  598KB          1   | | com.intellij.execution.runners.RunTab$1
[   12/  1%/  684B]  598KB          1   | | java.util.HashMap
[   12/  1%/  684B]  598KB          1   | | java.util.HashMap$Node[]
[   12/  1%/  684B]  598KB          2   | | java.util.HashMap$Node
[   10/  1%/  570B]  275KB          2 ! | | com.intellij.ui.content.impl.ContentImpl (disposed)
[    8/  0%/  456B] 82.3KB          2 ! | | com.intellij.execution.impl.ConsoleViewImpl (disposed)
[    8/  0%/  456B] 2.44KB          8 * | | com.intellij.util.Alarm (disposed)
[   47/  4%/2.67KB] 10.3MB          5   | +-java.util.concurrent.ConcurrentHashMap
[   47/  4%/2.67KB] 10.3MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[   47/  4%/2.67KB]  4.0MB         32   | | java.util.concurrent.ConcurrentHashMap$Node
[   15/  1%/  855B] 38.7KB          5   | | git4idea.repo.GitRepositoryManager
[   15/  1%/  855B] 34.6KB          5 ! | | com.intellij.dvcs.repo.VcsRepositoryManager (disposed)
[   10/  1%/  570B] 29.6KB          5   | | com.intellij.openapi.vcs.impl.ProjectLevelVcsManagerImpl
[   10/  1%/  570B] 15.8KB          5 ! | | com.intellij.openapi.vcs.impl.projectlevelman.NewMappings (disposed)
[    5/  0%/  285B] 6.34KB          5 ! | | com.intellij.util.ui.update.MergingUpdateQueue (disposed)
[    5/  0%/  285B] 2.48KB          5 * | | com.intellij.util.Alarm (disposed)
[   15/  1%/  855B] 9.47MB          5   | \-com.intellij.util.concurrency.SynchronizedClearableLazy
[   15/  1%/  855B] 9.47MB          5   |   java.util.concurrent.atomic.AtomicReference
[   15/  1%/  855B] 9.47MB          5   |   com.intellij.configurationScript.providers.MyProjectStore
[   15/  1%/  855B] 5.49MB          5   |   com.intellij.util.concurrency.SynchronizedClearableLazy
[...removed 23 lines...]
[    5/  0%/  285B]  213KB          4       java.awt.BorderLayout
[    5/  0%/  285B]  206KB          4 !     com.intellij.openapi.wm.impl.status.IdeStatusBarImpl (disposed)
[    5/  0%/  285B]  189KB          4 !     com.intellij.openapi.wm.impl.status.InfoAndProgressPanel (disposed)
[    4/  0%/  228B] 11.8KB          4       com.intellij.openapi.wm.impl.status.StatusPanel
[    4/  0%/  228B]   464B          4 *     com.intellij.util.Alarm (disposed)
Root 3:
[    6/  0%/  342B]  202KB          1   ROOT: Global JNI
[    6/  0%/  342B]  202KB          1   com.intellij.ui.jcef.JBCefJSQuery$1
[    6/  0%/  342B]  202KB          1   org.intellij.plugins.markdown.ui.preview.jcef.BrowserPipe$subscribe$1
[    6/  0%/  342B]  202KB          1   org.intellij.plugins.markdown.ui.preview.jcef.MarkdownJCEFHtmlPanel$1
[    6/  0%/  342B]  202KB          1 ! org.intellij.plugins.markdown.ui.preview.jcef.MarkdownJCEFHtmlPanel (disposed)
[    6/  0%/  342B]  196KB          1   com.intellij.ui.jcef.JBCefBrowser$3
[    6/  0%/  342B]  194KB          1   javax.swing.JPanel
[    4/  0%/  228B]  113KB          1   org.intellij.plugins.markdown.ui.preview.MarkdownPreviewFileEditor$2
[    4/  0%/  228B]  113KB          1 ! org.intellij.plugins.markdown.ui.preview.MarkdownPreviewFileEditor (disposed)
[    2/  0%/  114B]  111KB          1   com.intellij.openapi.editor.impl.EditorImpl
[    1/  0%/   57B] 9.35KB          1   com.intellij.openapi.editor.impl.EditorMarkupModelImpl
[    1/  0%/   57B]   116B          1 * com.intellij.util.Alarm (disposed)
Root 4:
[    1/  0%/   57B]  217KB          1   ROOT: Static field: com.github.restful.tool.utils.RequestUtil$Custom.REQUEST_CACHE
[    1/  0%/   57B]  217KB          1   java.util.HashMap
[    1/  0%/   57B]  217KB          1   java.util.HashMap$Node[]
[    1/  0%/   57B]  217KB          1   java.util.HashMap$Node
[    1/  0%/   57B]  217KB          1   com.intellij.psi.impl.source.PsiMethodImpl
[    1/  0%/   57B]  215KB          1   com.intellij.psi.impl.source.SpineRef
[    1/  0%/   57B]  215KB          1   com.intellij.psi.impl.source.PsiJavaFileImpl
[    1/  0%/   57B] 21.2KB          1   com.intellij.util.keyFMap.MapBackedFMap
[    1/  0%/   57B] 21.0KB          1   java.lang.Object[]
[    1/  0%/   57B] 18.5KB          1   com.intellij.psi.impl.PsiCachedValueImpl
[    1/  0%/   57B] 18.4KB          1   com.intellij.psi.util.CachedValuesManager$1
[    1/  0%/   57B] 18.4KB          1   com.intellij.application.options.codeStyle.cache.CodeStyleCachedValueProvider
[    1/  0%/   57B] 18.3KB          1   com.intellij.application.options.codeStyle.cache.CodeStyleCachedValueProvider$AsyncComputation
[    1/  0%/   57B] 17.3KB          1   com.intellij.psi.codeStyle.ProjectCodeStyleSettingsManager
[    1/  0%/   57B] 4.02KB          1   com.intellij.util.containers.LockFreeCopyOnWriteArrayList
[    1/  0%/   57B] 4.01KB          1   java.lang.Object[]
[    1/  0%/   57B] 3.99KB          1 ! com.intellij.psi.codeStyle.statusbar.CodeStyleStatusBarWidget (disposed)
[    1/  0%/   57B]   116B          1 * com.intellij.util.Alarm (disposed)

Disposed but still strong-referenced objects: 9 com.intellij.openapi.project.impl.ProjectExImpl, most common paths from GC-roots:
Root 1:
[    1/ 11%/  132B] 18.3MB          1   ROOT: Static field: javax.swing.TransferHandler.recognizer
[    1/ 11%/  132B] 18.3MB          1   javax.swing.TransferHandler$SwingDragGestureRecognizer
[    1/ 11%/  132B] 18.3MB          1   com.intellij.openapi.editor.impl.EditorComponentImpl
[    1/ 11%/  132B] 18.3MB          1   com.intellij.openapi.editor.impl.EditorImpl
[    1/ 11%/  132B]  3.9MB          1 * com.intellij.openapi.project.impl.ProjectExImpl (disposed)
Root 2:
[    1/ 11%/  132B] 78.5MB          1   ROOT: Static field: java.awt.KeyboardFocusManager.newFocusOwner
[    1/ 11%/  132B] 78.5MB          1   com.intellij.execution.testframework.sm.runner.ui.SMTRunnerTestTreeView
[    1/ 11%/  132B] 78.4MB          1 ! com.intellij.execution.testframework.sm.runner.ui.SMTestRunnerResultsForm (disposed)
[    1/ 11%/  132B] 1.85MB          1 * com.intellij.openapi.project.impl.ProjectExImpl (disposed)

Disposed but still strong-referenced objects: 639 com.intellij.openapi.util.Disposer$1, most common paths from GC-roots:
Ignored 6 too-deep objects
Root 1:
[  459/ 72%/7.34KB]  621MB          1   ROOT: Static field: com.intellij.openapi.util.Disposer.ourTree
[  459/ 72%/7.34KB]  621MB          1   com.intellij.openapi.util.ObjectTree
[  459/ 72%/7.34KB]  619MB          1   it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap
[  459/ 72%/7.34KB]  619MB          1   java.lang.Object[]
[  424/ 66%/6.78KB]  566MB          9   cn.yiiguxing.plugin.translate.wordbook.WordBookToolWindowFactory$init$1
[  424/ 66%/6.78KB]  566MB          9   com.intellij.openapi.util.Ref
[  424/ 66%/6.78KB]  566MB          9   com.intellij.openapi.wm.impl.ToolWindowImpl
[  415/ 65%/6.64KB]  566MB          9   com.jetbrains.rdserver.toolWindow.BackendServerToolWindowManager
[  330/ 52%/5.28KB] 16.1MB          9   +-java.util.HashMap
[  330/ 52%/5.28KB] 16.1MB          9   | java.util.HashMap$Node[]
[  330/ 52%/5.28KB] 15.8MB        240   | java.util.HashMap$Node
[  286/ 45%/4.57KB] 12.8MB        232   | com.intellij.openapi.wm.impl.ToolWindowEntry
[  232/ 36%/3.71KB] 3.71KB        232 * | com.intellij.openapi.util.Disposer$1 (disposed)
[   41/  6%/  656B] 48.5MB          5 ! +-com.intellij.openapi.project.impl.ProjectExImpl (disposed)
[   18/  2%/  288B] 10.3MB          5   | +-java.util.concurrent.ConcurrentHashMap
[   18/  2%/  288B] 10.3MB          5   | | java.util.concurrent.ConcurrentHashMap$Node[]
[   18/  2%/  288B] 7.54MB         12   | | java.util.concurrent.ConcurrentHashMap$Node
[    8/  1%/  128B]  926KB          8   | | +-java.util.concurrent.ConcurrentHashMap$Node
[    5/  0%/   80B]  923KB          5   | | | com.intellij.psi.impl.file.impl.PsiVFSListener
[    5/  0%/   80B]  923KB          5 ! | | | com.intellij.workspaceModel.ide.impl.legacyBridge.project.ProjectRootManagerBridge (disposed)
[    5/  0%/   80B]  1.6KB          5   | | | com.intellij.openapi.roots.impl.OrderRootsCache
[    5/  0%/   80B]    80B          5 * | | | com.intellij.openapi.util.Disposer$1 (disposed)
[    8/  1%/  128B]  6.6MB          2 ! | | \-com.intellij.codeInsight.daemon.problems.FileStateCache (disposed)
[    8/  1%/  128B]  6.6MB          2   | |   com.intellij.util.containers.SLRUMap
[    8/  1%/  128B]  6.6MB          2   | |   com.intellij.util.containers.SLRUMap$1
[    8/  1%/  128B]  6.6MB          2   | |   com.intellij.util.containers.hash.LinkedHashMap$Entry
[    8/  1%/  128B] 6.59MB          2   | |   com.intellij.codeInsight.daemon.problems.FileStateCache$PrivateFileState
[    8/  1%/  128B] 6.59MB          2   | |   java.util.LinkedHashMap
[    6/  0%/   96B] 3.38MB          1   | |   java.util.HashMap$TreeNode
[    6/  0%/   96B] 3.28MB          1   | |   com.intellij.codeInsight.daemon.problems.ScopedMember
[    6/  0%/   96B] 3.28MB          1   | |   com.intellij.psi.search.GlobalSearchScope$IntersectionScope
[    6/  0%/   96B] 3.28MB          1   | |   com.intellij.psi.search.GlobalSearchScope$UnionScope
[    6/  0%/   96B] 3.28MB          1   | |   com.intellij.psi.search.GlobalSearchScope[]
[    6/  0%/   96B] 3.28MB          1   | |   com.intellij.openapi.module.impl.scopes.ModuleWithDependentsScope
[    6/  0%/   96B] 3.28MB          1   | |   java.util.LinkedHashSet
[    6/  0%/   96B] 3.28MB          1   | |   java.util.LinkedHashMap
[    6/  0%/   96B] 3.28MB          1   | |   java.util.LinkedHashMap$Entry
[...removed 13230 lines...]

=============== ANALYSIS INFORMATION ==============
Prepare files duration: 26.15 s
Analysis duration: 34.59 s
TOTAL DURATION: 1.013 min
Temp files:
  heapdump = 1.73G
  id-mapping = 183M
  auxOffset = 45.9M
  aux = 1.14G
  parents = 45.9M
  sizes = 45.9M
  visited = 45.9M
  refIndex = 11.4M
================
Projects open: 2
Project 1:
  Module count: 1
  Editors opened: 10. Counts by type:
   * 7 com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl[com.intellij.ide.highlighter.JavaFileType]
   * 2 com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl[com.intellij.ide.highlighter.JavaClassFileType]
   * 1 com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl[com.intellij.ide.highlighter.XmlFileType]

Project 2:
  Module count: 4
  Editors opened: 9. Counts by type:
   * 9 com.intellij.openapi.fileEditor.impl.text.PsiAwareTextEditorImpl[com.intellij.ide.highlighter.JavaFileType]


```